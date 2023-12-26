import { useEffect, useState, useRef, useMemo } from 'react';
import { Button } from "@/components/ui/button"

import { simAPIRequest } from '@/components/api_hooks/EffectHook_APIRequest';
import { Reset } from '@/components/api_hooks/CallbackHook_Reset'

export function DisplayAPIResponseState()  {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(1);
  const [loading, setLoading] = useState(true);

  const addButtonRef = useRef<HTMLButtonElement>(null);

  function calculateScore() {
    console.log("INFO :: Score is being calculated.");
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    return sum;
  }
  
  useEffect(() => {
    simAPIRequest().then((person) =>  {
      setLoading(false);
      setName(person.name);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  const getScore = useMemo(
      () => calculateScore(),
      []
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div  className='my-3'>
      <h3 className='my-1'>{name}, {score}, {getScore / score}</h3>
      <Button variant="outline" className='mx-1' ref={addButtonRef} onClick={() => setScore(score + 1)}>Add</Button>
      <Button variant="outline" className='mx-1' onClick={() => setScore(score - 1)}>Subtract</Button>
      <Reset onClick={() => setScore(1)}/>
    </div>
  );
}