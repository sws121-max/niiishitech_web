import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the Niiishitech AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    greetings: [
      "Hello! Welcome to niiishitech. How can I assist you today?",
      "Hi there! I'm here to help you with any questions about our services.",
      "Greetings! What would you like to know about Niiishitech?"
    ],
    services: {
      general: "We offer three main services: Cybersecurity Services (starting from $2,999/month), Application Development (starting from $15,000/project), and Subscription Services (starting from $499/month). Which service interests you most?",
      cybersecurity: "Our cybersecurity services include penetration testing, security audits, incident response, and compliance management. We provide 24/7 monitoring and protection for your digital assets. Would you like to schedule a consultation?",
      development: "We specialize in web applications, mobile apps, API development, and cloud integration. Our team uses cutting-edge technologies to build scalable solutions. What type of application are you looking to develop?",
      subscription: "Our subscription services include 24/7 support, regular updates, performance monitoring, and backup solutions. This ensures your technology infrastructure runs smoothly. Would you like to learn more about our packages?"
    },
    contact: {
      phone: "You can reach our team at +91 7659823467. We're available Monday-Friday 9 AM-6 PM PST, Saturday 10 AM-4 PM PST.",
      email: "You can email us at hello@niiishitech.com. We typically respond within 2 hours during business hours.",
      address: "Our office is located at 123 Tech Avenue, Silicon Valley, CA 94025. You can also schedule a virtual consultation!",
      team: "Our team consists of certified cybersecurity experts, experienced developers, and dedicated support specialists. We're here to help you succeed!"
    },
    pricing: "Our pricing is competitive and transparent: Cybersecurity services start at $2,999/month, Application development starts at $15,000/project, and Subscription services start at $499/month. Would you like a detailed quote?",
    consultation: "I'd be happy to help you schedule a consultation! You can use our contact form on the website, call us at +1 (555) 123-4567, or email hello@niiishitech.com. Our consultations are free and typically last 30-60 minutes.",
    support: "We provide 24/7 support for all our clients. You can reach us anytime through phone, email, or our support portal. Emergency support is available even on weekends!",
    default: "I'd be happy to help! You can ask me about our services, pricing, how to contact our team, scheduling consultations, or anything else related to Niiishitech."
  };

  const quickReplies = [
    "Tell me about services",
    "How to contact team?",
    "Pricing information",
    "Schedule consultation",
    "24/7 Support"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    }

    if (message.includes('service') || message.includes('what do you do')) {
      if (message.includes('cyber') || message.includes('security')) {
        return botResponses.services.cybersecurity;
      } else if (message.includes('app') || message.includes('development') || message.includes('software')) {
        return botResponses.services.development;
      } else if (message.includes('subscription') || message.includes('support')) {
        return botResponses.services.subscription;
      }
      return botResponses.services.general;
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('talk')) {
      if (message.includes('phone') || message.includes('call')) {
        return botResponses.contact.phone;
      } else if (message.includes('email') || message.includes('mail')) {
        return botResponses.contact.email;
      } else if (message.includes('address') || message.includes('location') || message.includes('office')) {
        return botResponses.contact.address;
      } else if (message.includes('team')) {
        return botResponses.contact.team;
      }
      return botResponses.contact.phone + " " + botResponses.contact.email;
    }

    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return botResponses.pricing;
    }

    if (message.includes('consultation') || message.includes('meeting') || message.includes('schedule')) {
      return botResponses.consultation;
    }

    if (message.includes('support') || message.includes('help') || message.includes('assistance')) {
      return botResponses.support;
    }

    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700 flex flex-col z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="h-6 w-6 text-white mr-2" />
          <div>
            <h3 className="font-semibold text-white">niiishitech Assistant</h3>
            <p className="text-xs text-white/80">Online • Ready to help</p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isBot ? 'bg-cyan-500' : 'bg-green-500'
              }`}>
                {message.isBot ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div
                className={`px-3 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-700 text-white'
                    : 'bg-gradient-to-r from-cyan-500 to-green-500 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-400' : 'text-white/70'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-gray-700 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 pb-2">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded-full transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-r from-cyan-500 to-green-500 text-white p-2 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
