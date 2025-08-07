import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInForm = z.object({
  email: z.email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    }
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        }
      });
    } catch {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/sign-up">
          Novo estabelecimento
        </Link>
      </Button>

      <div className="w-[350px] flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>

          <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
