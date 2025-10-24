"use client";

import Link from "next/link";
import { Button, Input, Card } from "@/components";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
      <Card>
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
          Welcome Back
        </h1>
        <form className="space-y-5">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="Enter password" />
          <Button type="submit">Login</Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[var(--color-primary)] font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
