import { useForm, FieldError } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"

import { ValidationError } from '@/components/formval/ValidationError'

type CreateUserType = {
    name: string;
    password: string;
    email?: string;
    level: string;
    notes?: string;
}




export function UserForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<CreateUserType>({
        mode: "onBlur",
        reValidateMode: "onBlur"
    })

    const navigate = useNavigate()

    function onSubmit(user: CreateUserType) {
        console.log('Submitted details:', user);
        navigate(`/user-details/${user.name}`);
    }

    function getEditorStyle(fieldError: FieldError |
        undefined) {
        return fieldError ? 'border-red-500' : '';
    }

    // const fieldStyle = "flex flex-col mb-2";

    return (
        <div className='container mx-auto h-screen flex justify-center'>
          <Card className="w-fit h-fit mt-4">
            <CardHeader>
                <CardTitle>Add a User</CardTitle>
                <CardDescription>Fill out the username, password and access level to create a new user.</CardDescription>
            </CardHeader>
            <CardContent>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label htmlFor="name">Your user name</Label>
                        <Input 
                            type="text"
                            id="name"
                            disabled={isSubmitting}
                            {...register('name', {
                                required: 'You must enter your name.',
                            })}
                            className={getEditorStyle(errors.name)}
                        />
                        <ValidationError fieldError={errors.name} />
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="password" className='my-4'>Your user password</Label>
                        <Input 
                            type="password"
                            id="password"
                            disabled={isSubmitting}
                            {...register('password', {
                                required: 'You must enter your password.',
                            })}
                            className={getEditorStyle(errors.password)}
                        />
                        <ValidationError fieldError={errors.password} />
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="email" className='my-2'>Your email address</Label>
                        <Input
                            type="email"
                            id="email"
                            disabled={isSubmitting}
                            {...register('email', {
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Entered value does not match email format.',
                                },
                            })}
                            className={getEditorStyle(errors.email)}
                        />
                        <ValidationError fieldError={errors.email} />
                    </div>
                    <div className='mt-4'>

                        <Label htmlFor="level" className='my-2'>Granted access level</Label>
                        <div className='flex flex-col'>
                            <select
                                id="level"
                                disabled={isSubmitting}
                                {...register('level', {
                                    required: 'You must enter the authorization level.',
                                })}
                                className='flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-5'
                            >
                                <option value="">Select an authorization level...</option>
                                <option value="user">User</option>
                                <option value="operator">Operator</option>
                                <option value="administrator">Administrator</option>
                            </select>
                            <ValidationError fieldError={errors.level} />
                        </div>

                        {/* <Label htmlFor="level">Granted access level</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select authorization level" />
                                </SelectTrigger>
                                <SelectContent
                                    id="level"
                                    {...register('level', {
                                                required: 'You must enter the authorization level.',
                                    })}
                                    className={getEditorStyle(errors.level)}
                                >
                                    <SelectItem value="User">User</SelectItem>
                                    <SelectItem value="Operator">Operator</SelectItem>
                                    <SelectItem value="Administrator">Administrator</SelectItem>
                                </SelectContent>
                            </Select>
                        <ValidationError fieldError={errors.level} /> */}

                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="notes">Additional notes</Label>
                        <Textarea id="notes" disabled={isSubmitting}  {...register('notes')} />
                    </div>
                    <div className='mt-4'>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
        </CardContent>
        </Card>
    </div>
    );
}

export function AddUserDetails() {
    return (
        <div className="flex flex-col max-w-md mx-auto">
            <h2 className="text-3xl font-bold underline mb-3">
                Add a User
            </h2>
            <UserForm />
        </div>
    );
}