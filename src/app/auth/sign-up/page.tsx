"use client"
import { signUpSchema, SignUpSchemaType } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

export default function SignUpPage() {
  const forms = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create an account to get started</CardDescription>
        <CardContent>
          <form onSubmit={forms.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-y-2">
              <Controller name="username" control={forms.control}
                render={({ field, fieldState }) => {
                  return (
                    <Field>
                      <FieldLabel>Full Name</FieldLabel>
                      <Input placeholder="Name" type="text" {...field} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  );
                }} />
              <Controller name="email" control={forms.control}
                render={({ field, fieldState }) => {
                  return (
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input placeholder="Email" type="email" {...field} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  );
                }} />
              <Controller name="password" control={forms.control}
                render={({ field, fieldState }) => {
                  return (
                    <Field>
                      <FieldLabel>Password</FieldLabel>
                      <Input placeholder="Password" type="password" {...field} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  );
                }} />

              <Controller name="confirmPassword" control={forms.control}
                render={({ field, fieldState }) => {
                  return (
                    <Field>
                      <FieldLabel>Confirm Password</FieldLabel>
                      <Input placeholder="Confirm Password" type="password" {...field} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  );
                }} />
            <Button type="submit">Sign Up</Button>
            </FieldGroup>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  )
}