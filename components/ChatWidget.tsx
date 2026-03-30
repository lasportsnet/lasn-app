'use client'
import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_ACTIONS = [
  'Monday softball leagues',
  "What's in West LA?",
  'How much does it cost?',
  'Saturday options',
]

const CHATBOT_API = 'https://lasn-chatbot.vercel.app/api/chat'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setShowQuickActions(false)
    setLoading(true)

    try {
      const res = await fetch(CHATBOT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() }),
      })

      if (!res.ok) throw new Error('Chat API error')

      const data = await res.json()
      const assistantMsg: Message = {
        role: 'assistant',
        content: data.reply || data.message || data.response || 'Sorry, I could not process that request.',
      }
      setMessages(prev => [...prev, assistantMsg])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I\'m having trouble connecting right now. Please try again or contact us at info@lasportsnet.com.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-h-[560px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A1D3B] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <img
                src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=96&q=75"
                alt="LASN"
                className="w-7 h-7 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">LASN Assistant</h3>
              <p className="text-blue-300 text-xs">Find your league in LA</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-300 text-xs">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[360px]">
            {/* Welcome message */}
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#1A1D3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <img
                  src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=96&q=75"
                  alt="LASN"
                  className="w-4 h-4 object-contain brightness-0 invert"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-[280px]">
                <p className="text-sm text-gray-800">
                  Hey! 👋 Ask me anything about LASN leagues — sport, neighborhood, day, price. I&apos;ve got you covered!
                </p>
              </div>
            </div>

            {/* Quick actions */}
            {showQuickActions && messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pl-9">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="text-xs bg-white border border-gray-200 hover:border-[#EF4A23] hover:text-[#EF4A23] text-gray-600 rounded-full px-3 py-1.5 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#1A1D3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img
                      src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=96&q=75"
                      alt="LASN"
                      className="w-4 h-4 object-contain brightness-0 invert"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[280px] text-sm ${
                    msg.role === 'user'
                      ? 'bg-[#EF4A23] text-white rounded-tr-md'
                      : 'bg-gray-100 text-gray-800 rounded-tl-md'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#1A1D3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <img
                    src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=96&q=75"
                    alt="LASN"
                    className="w-4 h-4 object-contain brightness-0 invert"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about leagues..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#EF4A23] transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-[#EF4A23] hover:bg-[#C7391A] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl p-2.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white hover:bg-gray-50 shadow-lg border border-gray-200 rounded-full pl-3 pr-5 py-3 transition-all hover:shadow-xl group"
      >
        <div className="w-8 h-8 rounded-full bg-[#1A1D3B] flex items-center justify-center flex-shrink-0">
          <img
            src="https://lasn.dev/_next/image?url=%2Flasn-logo.png&w=96&q=75"
            alt="LASN"
            className="w-5 h-5 object-contain brightness-0 invert"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <span className="text-sm font-semibold text-[#1A1D3B] group-hover:text-[#EF4A23] transition-colors">
          {isOpen ? 'Close' : 'Chat with us'}
        </span>
      </button>
    </>
  )
}
