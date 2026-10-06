# Agent Behavior Specification

Documentation and reference implementation site for the Agent Behavior specification: a portable, behavior-first format for packaging an executable Agent with its own behavioral skill, Actions, persistent knowledge, and MCPQ channels.

The specification incorporates the interoperable parts of Agent Skills and Agent Plugins, the persistent-knowledge and validation-gated evolution model introduced by WikiSkill, and the architecture developed in this repository.

## What changed

Agent Skills specified an important and reusable part of the problem: a portable SKILL.md directory containing instructions, scripts, references, and resources that an agent can load progressively. Agent Plugins then standardized how Skills and MCP servers can be packaged and discovered together.

Our semantic model is different.

In Agent Behavior, the Agent is the primary execution unit. An Agent has its own SKILL.md, Actions are the executable capabilities of that Agent, persistent knowledge is separated from runtime instructions, and MCPQ channels provide the communication boundary. A Queue is the default MCPQ channel mode.

This specification therefore contains the concepts needed to represent Agent Skills and Agent Plugins, while adding Agent identity, Action semantics, persistent knowledge, experience-driven evolution, validation gates, and MCPQ channels.

## Repository layout

- content/docs/ — documentation and normative specification.
- public/schemas/ — canonical machine-readable schemas.
- app/ and components/ — documentation site.
- specification-source.json — provenance for external specifications incorporated into the design.

## Development

    pnpm install
    pnpm dev

Production build:

    pnpm build

## Design lineage

The specification explicitly documents its relationship to:

- Agent Skills — portable SKILL.md packages and progressive disclosure.
- Agent Plugins 1.0 — fixed-location discovery, manifests, packaging, MCP configuration, and component failure isolation.
- WikiSkill — separation of evidence, persistent knowledge, executable skills, proposal/evolution loops, and validation-gated promotion.
- MCP — protocol interoperability.
- MCP Tasks and related asynchronous work — background and durable execution primitives that motivate queue-oriented Agent communication.

The goal is not to rename these projects. It is to compose their useful primitives into a single Agent execution model with a different semantic center.

## Licensing

Documentation and authored assets are available under CC-BY-4.0. Source code, configuration, schemas, and scripts are available under Apache-2.0. See LICENSE.md.
