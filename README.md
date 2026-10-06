# Agent Behavior Specification

Documentation and reference implementation site for the Agent Behavior specification: a behavior-first format for packaging a semantic Agent with a derived Agent Skill, executable Actions, persistent Knowledge, and MCPQ communication.

## The semantic model

The central rule is:

> Every semantic Agent instance has one Agent Skill derived from its Behavior Flow.

The portable package is a projection of that semantic model:

    Agent
    ├── agent.json
    ├── SKILL.md                 # derived Agent Skill
    ├── actions/                 # executable capabilities
    │   └── <action>/SKILL.md
    ├── knowledge/               # evidence, wiki, evolution
    └── mcpq.json                # communication boundary

The broader execution ontology is:

    AtomicSkill
         ↓
    AtomicBehavior
         ↓
       Action
         ↓
       Actor
         ↓
      Runtime

And the behavior/evolution lifecycle is:

    Intent
      ↓
    Behavior Flow
      ↓
    Trajectory
      ↓
    Evidence
      ↓
    Wiki
      ↓
    Evolution
      ↓
    validated Behavior Flow change
      ↓
    regenerated Skill

## Why this specification exists

Agent Skills specified an important and reusable file-level primitive: a portable SKILL.md directory with optional scripts, references, assets, and progressive disclosure.

Agent Plugins then standardized how Skills and MCP servers can be packaged and discovered together.

WikiSkill demonstrated the value of separating execution experience, persistent knowledge, and executable Skills, with validation-gated evolution.

Agent Behavior composes these ideas but changes the semantic center.

    Skill    = behavioral definition / portable projection
    Action   = executable capability
    Agent    = semantic execution unit
    Actor    = concrete execution identity
    Runtime  = execution environment
    MCPQ     = communication boundary, Queue by default

This is not a cosmetic rename of Plugin or Skill.

## What Agent Behavior adds

The draft specification explicitly defines:

- Agent identity as a first-class semantic object;
- one Agent Skill per semantic Agent, derived from its Behavior Flow;
- AtomicSkill and AtomicBehavior as semantic composition units;
- Action as the executable capability boundary;
- Actor versus Runtime as separate concepts;
- Intent and Trajectory as semantic input and observation;
- persistent Evidence, Wiki, and Evolution boundaries;
- validation-gated promotion of learned behavior;
- MCPQ channels with Queue as the default mode;
- failure isolation and runtime trust boundaries;
- traceability between semantic source and portable Skill projections.

## What is intentionally not fixed

Agent Behavior does not force a particular Behavior Flow DSL, UI framework, database, LLM, queue broker, observability backend, or application architecture.

The semantic source can therefore remain Semantic-as-Code while portable runtimes consume the generated Agent package.

## Development

    pnpm install
    pnpm dev

Production build:

    pnpm build

## Design lineage

The specification explicitly documents its relationship to:

- Agent Skills — SKILL.md format and progressive disclosure.
- Agent Plugins 1.0 — package discovery, manifests, fixed component locations, MCP configuration, and failure isolation.
- WikiSkill — evidence, persistent wiki knowledge, skill evolution, and validation-gated promotion.
- MCP — interoperable protocol semantics.
- MCP Tasks — durable asynchronous task execution and deferred result retrieval.

The goal is not to rename these projects. It is to compose their useful primitives into a semantic Agent execution model with explicit ownership and traceability.

## Licensing

Documentation and authored assets are available under CC-BY-4.0. Source code, configuration, schemas, and scripts are available under Apache-2.0. See LICENSE.md.
