import GoogleProvider from "next-auth/providers/google";

export const authOptions= {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            async profile(profile, tokens:any) {
                console.log(profile);
                return {id: profile.id, name: profile.name, email: profile.email}
                
            }
        })
    ]
}