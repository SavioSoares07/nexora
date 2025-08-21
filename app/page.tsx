"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // ... dentro de export default function LandingPage()

  const teamMembers = [
    {
      name: "Gabriel Santos",
      role: "CFO e CO-Fundador",
      image: "/images/team/membro-1.jpg",
    },
    {
      name: "Adolfo Batista",
      role: "CEO & Fundador",
      image: "/images/team/membro-2.jpg",
    },
    {
      name: "Darllan saturnino",
      role: "Líder Comercial",
      image: "/images/team/membro-3.jpg",
    },
  ];

  // ... resto do seu código
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Automação Inteligente",
      description:
        "Transforme tarefas repetitivas em processos automáticos e ganhe mais tempo para escalar seu negócio.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Funis de Conversão",
      description:
        "Construa funis eficientes que geram leads qualificados e aumentam suas vendas previsíveis.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Análise e Resultados",
      description:
        "Tenha insights em tempo real para tomar decisões rápidas e melhorar campanhas continuamente.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Integração Total",
      description:
        "Conecte suas ferramentas de marketing, CRM e tráfego pago sem complicação.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Impulsione seu Marketing com IA",
      description: "Resultados mais rápidos, previsíveis e escaláveis.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Suporte Sempre Ativo",
      description:
        "Conte com nosso time especializado para garantir que você alcance resultados consistentes.",
      icon: <Star className="size-5" />,
    },
  ];

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <header
          className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
            isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
          }`}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <div className="flex items-center gap-2 font-bold">
                {/* The 'div' is replaced with the Image component */}
                <Image
                  src="images/logo.png" // <-- Path to your logo in the 'public' folder
                  alt="Nexora Logo"
                  width={32} // Corresponds to size-8 (8 * 0.25rem * 16px)
                  height={32}
                />
                <span>Nexora</span>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Ferramentas
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                FeedBacks
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Equipe
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Sobre nós
              </Link>
            </nav>
            <div className="hidden md:flex gap-4 items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Link
                href="https://www.instagram.com/nexoraofcc"
                target="_blank"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Saiba mais
              </Link>
              <Button className="rounded-full">
                Explorar
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
            >
              <div className="container py-4 flex flex-col gap-4">
                <Link
                  href="#features"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#pricing"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <Link
                    href="#"
                    className="py-2 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Button className="rounded-full">
                    Get Started
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </header>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            <div className="container px-4 md:px-6 relative">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Transformamos Ideias em Resultados
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  A agência de marketing que conecta estratégia, automação e
                  criatividade para gerar resultados reais. Simplifique sua
                  comunicação e potencialize o crescimento da sua marca.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Explorar
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>Funis</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>Tráfego Pago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-primary" />
                    <span>Automação</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-5xl"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                  <Image
                    src="https://cdn.dribbble.com/userupload/17299589/file/original-90113308e68068f41645b091189098fc.png?resize=1504x1128&vertical=center"
                    width={1280}
                    height={720}
                    alt="SaaSify dashboard"
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
              </motion.div>
            </div>
          </section>

          {/* Logos Section */}
          <section className="w-full py-12 border-y bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      src={`/images/logo.png`}
                      alt={`Company logo ${i}`}
                      width={1000}
                      height={1000}
                      className="h-12 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  Features
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Tudo o que você precisa para crescer
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Nossa plataforma de marketing une inteligência artificial,
                  automação e estratégias de funil para fornecer todas as
                  ferramentas necessárias. Otimize suas campanhas, potencialize
                  resultados e leve seu negócio ao próximo nível.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {features.map((feature, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  Como trabalhamos ?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Processo simples, resultados poderosos
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Comece em minutos e veja a diferença que conseguimos fazer
                  para o seu negócio.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

                {[
                  {
                    step: "01",
                    title: "Impulsione Suas Campanhas",
                    description:
                      "Comece a transformar seu marketing com funis inteligentes, automação e estratégias baseadas em IA.",
                  },
                  {
                    step: "02",
                    title: "Otimize Resultados",
                    description:
                      "Analise dados em tempo real, ajuste suas campanhas e alcance leads mais qualificados.",
                  },
                  {
                    step: "03",
                    title: "Acelere o Crescimento",
                    description:
                      "Automatize processos, reduza esforços manuais e aumente vendas previsíveis de forma consistente.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative z-10 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  FeedBack
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Seu feedback é essencial para nós! Ele nos ajuda a aprimorar
                  nossas soluções, otimizar seus resultados e tornar sua
                  experiência ainda mais eficiente e assertiva.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "A automação dos funis reduziu nosso tempo gasto em tarefas repetitivas e aumentou a conversão de leads significativamente.",
                    author: "Ana Beatriz Silva",
                    role: "Marketing Manager",
                    rating: 5,
                  },
                  {
                    quote:
                      "A análise em tempo real nos ajudou a tomar decisões estratégicas rápidas. Nossos resultados em tráfego pago nunca foram tão consistentes.",
                    author: "Rafael Costa",
                    role: "CEO",
                    rating: 5,
                  },
                  {
                    quote:
                      "O suporte é incrível! Sempre que precisamos, o time responde rápido e resolve qualquer questão sem complicações.",
                    author: "Camila Torres",
                    role: "Head de Operações",
                    rating: 5,
                  },
                  {
                    quote:
                      "As ferramentas de colaboração integradas facilitaram muito o trabalho remoto da equipe. Nossa produtividade aumentou mesmo estando distribuídos geograficamente.",
                    author: "Laura Mendes",
                    role: "Product Manager",
                    rating: 5,
                  },
                  {
                    quote:
                      "Tentamos outras plataformas, mas nenhuma oferece a facilidade e o conjunto de ferramentas que esta solução entrega. Transformou nosso marketing digital.",
                    author: "Felipe Andrade",
                    role: "CMO",
                    rating: 5,
                  },
                  {
                    quote:
                      "A implementação foi rápida e intuitiva. Em poucas semanas já vimos um aumento significativo no ROI das campanhas.",
                    author: "Vinícius Pereira",
                    role: "COO",
                    rating: 5,
                  },
                ].map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex mb-4">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, j) => (
                              <Star
                                key={j}
                                className="size-4 text-yellow-500 fill-yellow-500"
                              />
                            ))}
                        </div>
                        <p className="text-lg mb-6 flex-grow">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                          <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  Nossa Equipe
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Conheça quem faz acontecer
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Os especialistas dedicados a impulsionar o seu sucesso.
                </p>
              </motion.div>

              {/* Galeria de Fotos da Equipe com Nomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      width={400}
                      height={400}
                      className="rounded-xl object-cover w-full h-auto aspect-square transition-all duration-300 hover:scale-105"
                    />
                    <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                    <p className="text-md text-primary">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <Badge
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  FAQ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Perguntas frequentes
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                  Encontre respostas para perguntas comuns sobre nós.
                </p>
              </motion.div>

              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "O que oferecemos?",
                      answer:
                        "Nossa empresa combina automação, funis de marketing e inteligência artificial para otimizar campanhas, gerar leads qualificados e aumentar vendas de forma previsível. Quer saber mais? Fale conosco pelo WhatsApp!",
                    },
                    {
                      question:
                        "Preciso ter experiência em marketing digital para usar?",
                      answer:
                        "Não! Nossos recursos são intuitivos e acessíveis para todos os níveis. Para começar, é só entrar em contato conosco pelo WhatsApp que nossa equipe faz toda a configuração para você.",
                    },
                    {
                      question: "Quais tipos de campanhas posso automatizar?",
                      answer:
                        "Você pode automatizar anúncios pagos, funis de vendas, fluxos de e-mail e muito mais. Clique no WhatsApp e descubra como aplicar na sua empresa.",
                    },
                    {
                      question: "Como funciona a análise de dados?",
                      answer:
                        "Oferecemos relatórios em tempo real e insights estratégicos para otimizar suas campanhas. Fale com nosso time no WhatsApp e veja como podemos ajudar.",
                    },
                    {
                      question:
                        "É possível integrar com minhas ferramentas atuais?",
                      answer:
                        "Sim! Nossa plataforma se conecta facilmente a CRMs, ferramentas de tráfego pago e outras soluções que você já utiliza. Saiba mais entrando em contato pelo WhatsApp.",
                    },
                    {
                      question: "Como posso começar?",
                      answer:
                        "É simples e rápido! Fale agora pelo WhatsApp e nossa equipe vai te orientar passo a passo para aproveitar ao máximo a plataforma.",
                    },
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <AccordionItem
                        value={`item-${i}`}
                        className="border-b border-border/40 py-2"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-6 text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Pronto para alavancar suas vendas ?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Junte-se a milhares de clientes satisfeitos que otimizaram
                  seus processos e aumentaram a produtividade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8 text-base"
                  >
                    Explorar
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold">
                  <div className="flex items-center gap-2 font-bold">
                    {/* The 'div' is replaced with the Image component */}
                    <Image
                      src="images/logo.png" // <-- Path to your logo in the 'public' folder
                      alt="Nexora Logo"
                      width={32} // Corresponds to size-8 (8 * 0.25rem * 16px)
                      height={32}
                    />
                    <span>Nexora</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Otimize seu fluxo de trabalho com nossa plataforma.
                </p>
                <div className="flex gap-4"></div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Nossos produtos</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#features"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Ferramentas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Nossa equipe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Nexora. Todos os direitos
                reservados.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacidade
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Termos de serviços
                </Link>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <div
          className="fixed bottom-6 right-6 z-[9999] 
                 bg-green-600 text-white p-4 rounded-full shadow-lg 
                 hover:bg-green-700 transition-colors"
        >
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}
