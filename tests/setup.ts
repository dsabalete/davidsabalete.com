// import { vi } from "vitest"
import { config } from "@vue/test-utils"

// Mock Nuxt auto-imports if needed
// This file can be used to set up global test configuration

// Configure Vue Test Utils to prevent auto-stubbing issues with WeakMap
// This prevents the "WeakMap keys must be objects" error when components
// are resolved as strings instead of component objects
config.global.stubs = {}
