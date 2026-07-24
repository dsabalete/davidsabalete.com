import { describe, it, expect, vi, beforeEach } from "vitest"
import { mount } from "@vue/test-utils"

const tMock = vi.fn((key: string) => key)

vi.stubGlobal("useI18n", () => ({ t: tMock }))
vi.stubGlobal("$fetch", vi.fn())

import ContactForm from "./ContactForm.vue"

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mountForm = () => mount(ContactForm, {
    attachTo: document.body
  })

  it("renders all form fields", () => {
    const wrapper = mountForm()
    expect(wrapper.find("#contact-name").exists()).toBe(true)
    expect(wrapper.find("#contact-email").exists()).toBe(true)
    expect(wrapper.find("#contact-message").exists()).toBe(true)
    expect(wrapper.find("button[type='submit']").exists()).toBe(true)
  })

  it("shows error when submitting with empty fields", async () => {
    const wrapper = mountForm()
    await wrapper.find("form").trigger("submit.prevent")
    expect(wrapper.find(".text-red-600").exists()).toBe(true)
    expect(tMock).toHaveBeenCalledWith("contact_form_error_required")
  })

  it("shows sending state while submitting", async () => {
    const mockFetch = vi.fn(() => new Promise(() => {}))
    vi.stubGlobal("$fetch", mockFetch)

    const wrapper = mountForm()
    await wrapper.find("#contact-name").setValue("Test")
    await wrapper.find("#contact-email").setValue("test@example.com")
    await wrapper.find("#contact-message").setValue("Hello")
    await wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find("button[type='submit']").text()).toBe("contact_form_sending")
  })

  it("shows success message on successful submission", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ success: true })
    vi.stubGlobal("$fetch", mockFetch)

    const wrapper = mountForm()
    await wrapper.find("#contact-name").setValue("Test")
    await wrapper.find("#contact-email").setValue("test@example.com")
    await wrapper.find("#contact-message").setValue("Hello")
    await wrapper.find("form").trigger("submit.prevent")

    await new Promise(process.nextTick)

    expect(wrapper.find(".text-green-600").exists()).toBe(true)
    expect(wrapper.find(".text-green-600").text()).toBe("contact_form_success")
  })

  it("clears form fields on successful submission", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ success: true })
    vi.stubGlobal("$fetch", mockFetch)

    const wrapper = mountForm()
    await wrapper.find("#contact-name").setValue("Test")
    await wrapper.find("#contact-email").setValue("test@example.com")
    await wrapper.find("#contact-message").setValue("Hello")
    await wrapper.find("form").trigger("submit.prevent")

    await new Promise(process.nextTick)

    expect((wrapper.find("#contact-name").element as HTMLInputElement).value).toBe("")
    expect((wrapper.find("#contact-email").element as HTMLInputElement).value).toBe("")
    expect((wrapper.find("#contact-message").element as HTMLTextAreaElement).value).toBe("")
  })

  it("shows error message on failed submission", async () => {
    const mockFetch = vi.fn().mockRejectedValue({
      data: { statusMessage: "Server error" }
    })
    vi.stubGlobal("$fetch", mockFetch)

    const wrapper = mountForm()
    await wrapper.find("#contact-name").setValue("Test")
    await wrapper.find("#contact-email").setValue("test@example.com")
    await wrapper.find("#contact-message").setValue("Hello")
    await wrapper.find("form").trigger("submit.prevent")

    await new Promise(process.nextTick)

    expect(wrapper.find(".text-red-600").exists()).toBe(true)
    expect(wrapper.find(".text-red-600").text()).toBe("Server error")
  })

  it("shows generic error when server returns no statusMessage", async () => {
    const mockFetch = vi.fn().mockRejectedValue({ data: {} })
    vi.stubGlobal("$fetch", mockFetch)

    const wrapper = mountForm()
    await wrapper.find("#contact-name").setValue("Test")
    await wrapper.find("#contact-email").setValue("test@example.com")
    await wrapper.find("#contact-message").setValue("Hello")
    await wrapper.find("form").trigger("submit.prevent")

    await new Promise(process.nextTick)

    expect(wrapper.find(".text-red-600").text()).toBe("contact_form_error_generic")
  })
})
