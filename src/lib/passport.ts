import { User } from "@prisma/client";
import passport from "passport";
import { db } from "./db";
import { GraphQLLocalStrategy } from "graphql-passport";
import { comparePassword } from "./hash";

// ! CONSOLE.LOGS & THROW ERRORS ARE USED FOR DEBUGGING PURPOSES

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    // console.log("SERIALIZE USER", user);
    if (!user) throw new Error("User not found");
    done(null, user);
  });

  passport.deserializeUser(async (user: User, done) => {
    // console.log("DESERIALIZE USER", user);
    try {
      const existingUser = await db.user.findUnique({
        where: { id: user.id },
      });
      if (!existingUser) throw new Error("User not found");
      done(null, existingUser);
    } catch (err) {
      done(err, null);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      // console.log("PASSPORT STRATEGY", await username, await password);
      const stringifyUsername = (await username) as string;
      try {
        const user = await db.user.findFirst({
          where: {
            username: stringifyUsername,
          },
        });
        if (!user) throw new Error("User not found");
        const isPasswordValid = await comparePassword(
          (await password) as string,
          user.password
        );
        if (!isPasswordValid) throw new Error("Password is invalid");
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
};
