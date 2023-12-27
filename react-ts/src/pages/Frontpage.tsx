import '@/styles/App.css';

import { useEffect, useState } from 'react';

import { getReports } from '@/components/reports/GetReports'
import { ReportData, NewReportData } from '@/components/reports/types'
import { ReportList } from '@/components/reports/ReportList'
import { saveReport } from '@/components/reports/NewReport';
import { NewReportForm } from '@/components/reports/NewReportForm';

import { InputComponent } from '@/components/input_ref/RefHook_InputComponent'
import { AlertNotify } from '@/components/alert/Alert'
import { EffectHook } from '@/components/button_effect/EffectHook'
import { Vault } from '@/components/login/Vault'

export function FrontPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [reports, setReports] = useState<ReportData[]>([])

  useEffect(() => {
    let cancel = false
    getReports().then((data) => {
      if (!cancel) {
        setReports(data);
      setIsLoading(false);
      }
    })
    return () => {
      cancel = true;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-96 mx-auto mt-6">
        Loading ...
      </div>
    );
  }

  async function handleSave(newReportData: NewReportData) {
    const newPost = await saveReport(newReportData);
    setReports([newPost, ...reports]);
  }

  return (
    <Vault>
      <div className="App">
        <AlertNotify heading="Warning" type="warning" closable>
          New alarm events were recorded!
        </AlertNotify>
        <ReportList reports={reports} />
        <NewReportForm onSave={handleSave} />
        <InputComponent />
        <EffectHook />
      </div>
    </Vault>
  );
}