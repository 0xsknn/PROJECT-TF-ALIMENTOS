import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix

  // Products endpoints
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar produtos" });
    }
  });

  app.get("/api/products/highlighted", async (req, res) => {
    try {
      const products = await storage.getHighlightedProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar produtos em destaque" });
    }
  });

  app.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar produto" });
    }
  });

  // Blog posts endpoints
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts do blog" });
    }
  });

  app.get("/api/blog/latest", async (req, res) => {
    try {
      const posts = await storage.getLatestBlogPosts(3);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar posts recentes" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar post" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Mensagem enviada com sucesso", id: submission.id });
    } catch (error) {
      console.error("Error handling contact form:", error);
      res.status(400).json({ message: "Erro ao processar o formulário" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
