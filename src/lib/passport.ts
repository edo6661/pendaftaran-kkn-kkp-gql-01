import { User } from "@prisma/client";
import passport from "passport";
import { db } from "./db";
import { GraphQLLocalStrategy } from "graphql-passport";
import { comparePassword } from "./hash";
import { userIncludeConfig } from "@/config/user";

// ! CONSOLE.LOGS & THROW ERRORS ARE USED FOR DEBUGGING PURPOSES

export const configurePassport = async () => {
  passport.serializeUser((user, done) => {
    // console.log("SERIALIZE USER", user);
    if (!user) throw new Error("User not found from serializeUser");
    done(null, user);
  });

  passport.deserializeUser(async (user: User, done) => {
    // console.log("DESERIALIZE USER", user);
    try {
      const existingUser = await db.user.findUnique({
        where: { id: user.id },
        include: userIncludeConfig,
      });
      if (!existingUser) throw new Error("User not found from deserializeUser");
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
          include: userIncludeConfig,
        });
        if (!user) throw new Error("User not found from passport strategy");
        const isPasswordValid = await comparePassword(
          (await password) as string,
          user.password
        );
        if (!isPasswordValid)
          throw new Error("Password is invalid from passport strategy");
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );
};
