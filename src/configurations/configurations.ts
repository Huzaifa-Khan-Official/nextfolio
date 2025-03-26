const configuration = {
    mongodb_uri: process.env.MONGODB_URI!,
    jwt_secret: process.env.JWT_SECRET!,
    nextAuthSecret: process.env.NEXTAUTH_SECRET!
}

export default configuration;