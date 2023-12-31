import { useState } from 'react'

import { Button } from "@/components/ui/button"

import {
    ChevronRightIcon,
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
  } from "@radix-ui/react-icons"

import { Checkbox } from "@/components/ui/checkbox"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"

import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group"
  

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


type Status = {
    value: string
    label: string
}

const statuses: Status[] = [
{
    value: "backlog",
    label: "Backlog",
},
{
    value: "todo",
    label: "Todo",
},
{
    value: "in progress",
    label: "In Progress",
},
{
    value: "done",
    label: "Done",
},
{
    value: "canceled",
    label: "Canceled",
},
]

export function Controls() {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(
      null
    )
    return (
        <>
            <div>
                <Button>Button</Button>
                <Button variant="outline">Button</Button>
                <Button variant="secondary">Button</Button>
                <Button variant="destructive">Button</Button>
                <Button variant="outline" size="icon">
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-sm text-muted-foreground">Status</p>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[150px] justify-start">
                        {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {statuses.map((status) => (
                            <CommandItem
                                key={status.value}
                                value={status.value}
                                onSelect={(value) => {
                                setSelectedStatus(
                                    statuses.find((priority) => priority.value === value) ||
                                    null
                                )
                                setOpen(false)
                                }}
                            >
                                {status.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </CommandList>
                    </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div>
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Slider defaultValue={[33]} max={100} step={1} />
                <Switch />
                <Toggle aria-label="Toggle italic">
                    <FontItalicIcon className="mr-2 h-4 w-4" />
                    Italic
                </Toggle>
                <ToggleGroup type="multiple" size="lg">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <FontBoldIcon className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <FontItalicIcon className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                        <UnderlineIcon className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </>
    )   
}
