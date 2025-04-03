import { 
  users, 
  type User, 
  type InsertUser,
  products,
  type Product,
  type InsertProduct,
  blogPosts,
  type BlogPost,
  type InsertBlogPost,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

import { mockProducts } from "../client/src/data/products";
import { mockBlogPosts } from "../client/src/data/blogPosts";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product operations
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getHighlightedProducts(): Promise<Product[]>;
  
  // Blog post operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getLatestBlogPosts(limit: number): Promise<BlogPost[]>;
  
  // Contact form operations
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private blogPosts: Map<number, BlogPost>;
  private contactSubmissions: Map<number, ContactSubmission>;
  
  currentUserId: number;
  currentProductId: number;
  currentBlogPostId: number;
  currentContactSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentBlogPostId = 1;
    this.currentContactSubmissionId = 1;
    
    // Initialize with mock data
    this.initializeData();
  }

  private initializeData() {
    // Initialize products
    mockProducts.forEach(product => {
      this.products.set(product.id, product);
      if (product.id >= this.currentProductId) {
        this.currentProductId = product.id + 1;
      }
    });
    
    // Initialize blog posts
    mockBlogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
      if (post.id >= this.currentBlogPostId) {
        this.currentBlogPostId = post.id + 1;
      }
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Product operations
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  
  async getHighlightedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.isHighlighted
    );
  }
  
  // Blog post operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async getLatestBlogPosts(limit: number): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
  
  // Contact form operations
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }
}

export const storage = new MemStorage();
