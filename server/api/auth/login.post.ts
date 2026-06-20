import bcrypt from "bcryptjs";
import z from "zod";

const bodySchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .trim()
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Email is not valid",
    }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user)
    throw createError({
      status: 401,
      message: "Credenciales Invalidas",
    });

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid)
    throw createError({
      status: 401,
      message: "Credenciales Invalidas",
    });

  const userSession = {
    uid: user.id,
    name: user.name,
    roles: user.roles,
    email: user.email,
  };

  await setUserSession(event, {
    user: userSession,
  });

  return {
    user: userSession,
  };
});
