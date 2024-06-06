import { User } from "@prisma/client";
import passport from "passport";
import { db } from "./db";
import { GraphQLLocalStrategy } from "graphql-passport";
import { comparePassword, hashPassword } from "./hash";

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    console.log("SERIALIZE USER", user);
    done(null, user);
  });
  passport.deserializeUser(async (user: User, done) => {
    console.log("DESERIALIZE USER", user);
    try {
      const existingUser = await db.user.findUnique({
        where: { id: user.id },
      });
      done(null, existingUser);
    } catch (err) {
      done(err, null);
    }
  });
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      console.log("GRAPHQLLOCAL STRATEGY", username, password);
      const hashedPassword = await hashPassword(password as string);
      const stringifyUsername = username as string;
      try {
        const user = await db.user.findFirst({
          where: {
            username: stringifyUsername,
          },
        });
        if (!user) throw new Error("User not found");
        const isPasswordValid = comparePassword(hashedPassword, user.password);
        if (!isPasswordValid) throw new Error("Password is invalid");
      } catch (err) {
        return done(err);
      }
    })
  );
};
