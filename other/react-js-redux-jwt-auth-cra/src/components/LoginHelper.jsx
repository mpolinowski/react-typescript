import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function LoginHelper() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Default Login:</AlertTitle>
      <AlertDescription>
        Use <code>admin</code> and <code>instar</code> to log in.
      </AlertDescription>
    </Alert>
  )
}
