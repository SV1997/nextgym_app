import { productSchema } from "@/lib/validators/productSchema";
import { writeFile } from "node:fs/promises";
import {PrismaClient, users,products} from "@prisma/client"
import path from "node:path";

export async function POST(req: Request, res: Response) {
    const client= new PrismaClient();
const data= await req.formData();

let validatedData 
try {
    validatedData = productSchema.parse({
        name: data.get('name'),
        description: data.get('description'),
        price: data.get('price'),
        image: data.get('image'),
        email: data.get('email')
    })
} catch (error) {
    return Response.json({message:error}, {status:400})
}

const filename= `${Date.now()}.${validatedData.image.name.split('.').slice(-1)}`
try {
    const buffer= Buffer.from(await validatedData.image.arrayBuffer());
    await writeFile(path.join(process.cwd(),'public/assets',filename), buffer)
} catch (error) {
    return Response.json({message:error}, {status:500})
}
try {
    await client.products.create({
        data: {
            name: validatedData.name,
            description: validatedData.description,
            price: validatedData.price,
            image: filename,
            users: {
                connect: { email: validatedData.email }
            }
        }
    })
} catch (error) {
    
}
}