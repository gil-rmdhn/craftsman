import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, price, description, image } = req.body;

      // Validasi input
      if (!name || !price) {
        return res.status(400).json({ error: 'Nama dan harga wajib diisi' });
      }

      // Generate slug secara otomatis
      const slug = name.toLowerCase().replace(/\s+/g, '-');

      const newProduct = await prisma.product.create({
        data: {
          name,
          slug,
          price: Number(price),
          description: description || '',
          image: image || '/placeholder.png', // Default gambar
        },
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Gagal membuat produk' });
    }
  } else if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Gagal mengambil produk' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
