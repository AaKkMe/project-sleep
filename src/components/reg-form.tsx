"use client"

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
import { useState } from "react"

export function RegForm({
  className,
  onToggleForm,
  ...props
}: React.ComponentProps<"div"> & { onToggleForm: () => void }) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const validatePhoneNumber = (number: string) => {
    if (!/^\d{10}$/.test(number)) {
      setPhoneNumberError("Phone number must be 10 digits.")
    } else {
      setPhoneNumberError("")
    }
  }

  const validatePassword = (password: string) => {
    let error = ""
    if (password.length < 4) {
      error = "Password must be at least 4 characters long. "
    }
    if (password.length > 20) {
      error += "Password must be at most 20 characters long. "
    }
    if (!/[a-z]/.test(password)) {
      error += "Password must contain a lowercase letter. "
    }
    if (!/[A-Z]/.test(password)) {
      error += "Password must contain an uppercase letter. "
    }
    if (!/\d/.test(password)) {
      error += "Password must contain a number. "
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      error += "Password must contain a special character. "
    }
    setPasswordError(error)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value
    setPhoneNumber(number)
    validatePhoneNumber(number)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    validatePassword(newPassword)
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    if (password !== newConfirmPassword) {
      setConfirmPasswordError("Passwords do not match.")
    } else {
      setConfirmPasswordError("")
    }
  }

  const isFormInvalid = !phoneNumber || !password || !confirmPassword || !!phoneNumberError || !!passwordError || !!confirmPasswordError

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
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                {phoneNumberError && <p className="text-red-500 text-sm">{phoneNumberError}</p>}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="confirm-password">Repeat the Password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isFormInvalid}>
                  Sign Up
                </Button>
              </div>
            </div>
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
