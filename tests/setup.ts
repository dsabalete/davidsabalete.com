import { config } from "@vue/test-utils"
import { ref, computed, watch, onMounted, nextTick, reactive } from "vue"

globalThis.ref = ref
globalThis.computed = computed
globalThis.watch = watch
globalThis.onMounted = onMounted
globalThis.nextTick = nextTick
globalThis.reactive = reactive

globalThis.readBody = vi.fn()

globalThis.defineEventHandler = <T extends (...args: unknown[]) => unknown>(handler: T): T => handler
globalThis.createError = (opts: { statusCode: number; statusMessage: string; data?: unknown }) => {
  const err = new Error(opts.statusMessage) as Error & {
    statusCode: number
    statusMessage: string
    data: unknown
  }
  err.statusCode = opts.statusCode
  err.statusMessage = opts.statusMessage
  err.data = opts.data
  throw err
}

config.global.stubs = {}
