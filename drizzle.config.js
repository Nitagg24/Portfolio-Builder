/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:ojT57EfyUCQW@ep-calm-sky-a5b3wpnu.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
