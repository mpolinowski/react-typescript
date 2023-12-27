import React from 'react'

import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/lib/use-media-query"

import { FieldError, useForm } from 'react-hook-form'
import { ValidationError } from '@/components/formval/ValidationError'
import { NewReportData } from './types'

type Props = {
    onSave: (newPost: NewReportData) => void;
}

export function NewReportForm({ onSave }: Props) {

    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
   
    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className='mt-12'>Submit a Report</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Submit a Report</DialogTitle>
              <DialogDescription>
                File a manual incident report.
              </DialogDescription>
            </DialogHeader>
            <ReportForm onSave={onSave} />
          </DialogContent>
        </Dialog>
      )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className='mt-12'>Submit a Report</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                <DrawerTitle>Submit a Report</DrawerTitle>
                <DrawerDescription>
                    File a manual incident report.
                </DrawerDescription>
                </DrawerHeader>
                <ReportForm onSave={onSave} />
                <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ReportForm( { onSave }: Props, { className }: React.ComponentProps<"form">) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<NewReportData>()

    function getEditorStyle( fieldError: FieldError | undefined ) {
        return fieldError ? 'border-red-500' : ''
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSave)} className={cn("grid items-start gap-4", className)}>
            <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                    type="text"
                    id="title"
                    disabled={isSubmitting}
                    {...register('title', {
                        required: 'You must enter your name.',
                    })}
                    className={getEditorStyle(errors.title)}
                />
                <ValidationError fieldError={errors.title} />
            </div>
            <div className='mt-4'>
                <Label htmlFor="description" className='my-4'>Description</Label>
                <Input 
                    type="text"
                    id="description"
                    disabled={isSubmitting}
                    {...register('description', {
                        required: 'You must enter the description',
                    })}
                    className={getEditorStyle(errors.description)}
                />
                <ValidationError fieldError={errors.description} />
            </div>
            <div className='mt-4'>
                <Button type="submit" disabled={isSubmitting} >
                    Submit
                </Button>
                {isSubmitSuccessful && (
                    <div
                        role="alert"
                        className="text-green-500 text-xs mt-1"
                    >
                        Report saved!
                    </div>
                )}
                <DrawerClose>
                    <Button variant="outline" className='ml-2'>Close</Button>
                </DrawerClose>
            </div>
        </form>
    )
}