'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { useEffect, useState } from "react"
import AuthService from "@/services/authService"
import tokenService from "@/services/tokenService"
import Link from "next/link"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const RegisterFormDataSchema = z.object({
        name: z.string().min(4).max(50),
        email: z.email(),
        password: z.string().min(8, "Password must contain minimum 8 characters").max(32, "Password can be maximum of 32 characters"),
        confirmPassword: z.string().min(8).max(32),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

    type RegisterFormData = z.infer<typeof RegisterFormDataSchema>

    const { register, handleSubmit, formState: {errors} } = useForm<RegisterFormData>({resolver: zodResolver(RegisterFormDataSchema)})

    const submitRegisterFormData = (formData: RegisterFormData) => {
        console.log("Register form submission invoked", formData);
        // Add code for register form submission

    }

    // const router = useRouter();
    // const [err, setErr] = useState("");
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // });

    // // TODO Work on the validation using zod
    // // handle change in form data
    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     })
    // }

    // const handleConfirmPasswordChange = (e: any) => {
    //     if (e.target.value !== formData.password) setErr("Password does not match.");
    //     else setErr("");
    // }

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if(formData.email !== "" && formData.password !== "") {
    //         try {
    //         const data = await AuthService.register(formData);
    //         if (!data.accessToken) throw new Error("Register unsuccessful.");

    //         // Store the token from data
    //         tokenService.setToken(data.accessToken);

    //         // Redirect to dashboard
    //         router.push('/dashboard');
    //     } catch (err: any) {
    //         // Handle error
    //         setErr(err.message);
    //     }
    //     }
    //     setErr("Provide all acredentials to login.");
    // }

    return (
        <div className={cn("sflex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={handleSubmit(submitRegisterFormData)}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome to Mind Task</h1>
                                <p className="text-muted-foreground text-balance">
                                    Register your account with us
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="name">Your full name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("name")}
                                    required
                                />
                                {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    {...register("email")}
                                    required
                                />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {/* TODO Add a next link here to forgot passowrd */}
                                    <a
                                        href="#"
                                        className="ml-auto text-sm underline-offset-2 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                    required
                                />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="confirm-password">Confirm your Password</Label>
                                </div>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    {...register("confirmPassword")}
                                    required
                                />
                                {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword.message}</span>}
                            </div>
                            {/* ALL ERRORS WILL DISPLAY HERE */}
                            <Button
                                type="submit"
                                id="submit"
                                name="submit"
                                className="w-full"
                            >
                                Sign Up
                            </Button>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="w-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Sign in with Google
                                    <span className="sr-only">Login with Google</span>
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                {/* TODO Add a next link here to sign in */}
                                <Link href="/login" className="underline underline-offset-4">Sign in</Link>
                            </div>
                        </div>
                    </form>
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src="/mind-task.svg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
