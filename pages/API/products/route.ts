import prisma from '../../../lib/prisma';

// Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error fetching products', { status: 500 });
  }
}

// Create a new product
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
        slug: body.slug,
        image: body.image,
        description: body.description,
      },
    });
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating product', { status: 500 });
  }
}
