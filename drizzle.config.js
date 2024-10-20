/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:jR0J9rInXzhw@ep-crimson-forest-a5cyd4ta.us-east-2.aws.neon.tech/Portfolio-Builder?sslmode=require",
  },
};
