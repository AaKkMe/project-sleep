import { cn } from "@/lib/utils"
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

export function RegForm({
  className,
  onToggleForm,
  ...props
}: React.ComponentProps<"div"> & { onToggleForm: () => void }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
                <div className="grid gap-3">
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  id="number"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
                <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Repeat the Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Log In
              </a>
            </div> */}
          <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <button type="button" onClick={onToggleForm} className="underline underline-offset-4">
                Log In
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
