"use client";

import Link from "next/link";
import { Button, Input, Card } from "@/components";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card>
        <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
          Create Account
        </h1>
        <form className="space-y-5">
          <Input type="text" placeholder="Enter your name" />
          <Input  type="email" placeholder="Enter your email" />
          <Input  type="password" placeholder="Create password" />
          <Button type="submit">Sign Up</Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--color-primary)] font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </Card>
    </div>
  );
}
