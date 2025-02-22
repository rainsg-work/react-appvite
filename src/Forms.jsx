import { Input, Label, Field, Fieldset, Legend, Button } from '@headlessui/react'
import clsx from 'clsx'

export default function Form() {
    return (
    <div className="w-full max-w-md px-4">
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
            <Legend className="text-base/7 font-semibol text-white">Health Information Management Request Form</Legend>
            {/* patients informations */}
            <Label className="text-sm/6 font-medium text-white">Firstname</Label>
            <Input name="first_name"/>
            
            <Label>Lastname</Label>
            <Input name="last_name"/>
            <Label>Period Covered:</Label>
            <Label>From</Label>
            <Input type="date" name="from"/>
            <Label for="to">To</Label>
            <Input type="date" id="to"></Input>

            {/* Type of Request */}
            <Label for="statData">Statistical Data</Label>
            <Input type="checkbox" id="statdata" name="statdata" value="statdata"></Input>
            
            <Label for="reports">Reports/Docs. Photocopy</Label>
            <Input type="checkbox" id="reports" name="reports" value="reports"></Input>
            
            <Label for="hrr">Health Records Retrieval</Label>
            <Input type="checkbox" id="hrr" name="hrr" value="hrr"></Input>
            
            <Label for="rsc">Research Stat. Consultation</Label>
            <Input type="checkbox" id="rsc" name="rsc" value="rsc"></Input>
            
            <Label for="others">Others</Label>
            <Input type="checkbox" id="others" name="others" value="others"></Input>
            

            {/* Intended use */}
            <Legend>Intended use:</Legend>
            <Label for="internal">Internal</Label>
            <Input type="radio" id="internal" name="intended_use" value="internal"></Input>
            
            
            <Label for="external">External</Label>
            <Input type="radio" id="external" name="intended_use" value="external"></Input>
            

            <Button type="button" className="rounded bg-sky-600 py-2 px-4 text-sm 
            text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">Submit</Button>
            <Button value="Cancel">Cancel</Button>
        </Fieldset>
    </div> 
)}