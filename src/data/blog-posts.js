export const blogPosts = [
  {
    id: "scaling-apis-10m-calls",
    title: "Scaling APIs to 10M+ Calls/Month: Lessons from the Trenches",
    excerpt:
      "How we redesigned our recommendation APIs with Redis caching and MessagePack serialization to handle massive scale while cutting infra costs by 30%.",
    date: "2025-11-15",
    readTime: "8 min read",
    tags: ["Backend", "Scaling", "Redis"],
    content: `
## The Challenge

When I joined Wayground's AI team, our recommendation APIs were struggling under growing traffic. We needed to scale to 10M+ calls/month without proportionally increasing infrastructure costs.

## The Approach

### 1. API Redesign
We restructured our API endpoints to reduce redundant data fetching and optimize query patterns.

### 2. Redis Caching Layer
Implemented intelligent caching with TTL-based invalidation, reducing database hits by 70%.

### 3. MessagePack Serialization
Replaced JSON serialization with MessagePack, reducing payload sizes by ~40% and improving serialization speed.

## Results
- **10M+ calls/month** handled smoothly
- **30% reduction** in infrastructure costs
- **Sub-50ms** p95 latency

*More details coming soon...*
    `,
  },
  {
    id: "building-voice-ai-platform",
    title: "Building a Real-time Voice AI Platform: Architecture Deep Dive",
    excerpt:
      "Designing fault-tolerant, low-latency backend services for multi-tenant real-time voice streaming with Python and Celery.",
    date: "2026-03-10",
    readTime: "10 min read",
    tags: ["Voice AI", "Python", "Architecture"],
    content: `
## Overview

Building a real-time Voice AI platform requires careful attention to latency, reliability, and multi-tenancy. Here's how we approached it at Dialflo.

## Key Architectural Decisions

### Low-latency Streaming
We optimized our STT pipeline with utterance finalization and buffering, achieving a 0.5s latency reduction.

### Async Processing with Celery
Heavy post-call analytics were offloaded to Celery-based async pipelines, eliminating request-path blocking.

### Multi-tenant Data Isolation
PostgreSQL with row-level security ensures clean tenant isolation without separate databases.

*More details coming soon...*
    `,
  },
  {
    id: "kafka-pubsub-microservices",
    title: "Migrating to Kafka Pub-Sub: Taming Microservice Communication",
    excerpt:
      "How re-architecting from synchronous calls to Kafka-based pub-sub reduced latency and improved throughput at Sprinklr.",
    date: "2024-08-20",
    readTime: "7 min read",
    tags: ["Kafka", "Microservices", "Java"],
    content: `
## The Problem

Our advocacy microservice was handling 1M+ requests/day with synchronous inter-service communication. Latency spikes during peak hours were becoming a reliability concern.

## The Solution

### Event-Driven Architecture
We migrated critical flows to Kafka-based pub-sub, decoupling producers from consumers.

### Async Workers
Background workers process events independently, improving throughput and fault tolerance.

### Monitoring
Grafana dashboards track consumer lag, throughput, and error rates in real-time.

*More details coming soon...*
    `,
  },
];
