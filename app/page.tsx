"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Camera, Film, Rocket, Timer, Sparkles, Star, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const LOGO_LIGHT = "/logo-ke-black.png";
const LOGO_DARK  = "/logo-ke-white.png";

const features = [
  { icon: Timer,   title: "3 ngày giao hàng", desc: "Pipeline rút gọn – một vòng feedback, gỡ watermark sau thanh toán." },
  { icon: Rocket,  title: "Tốc độ thanh khoản", desc: "Hợp đồng & đặt cọc online, link thanh toán nhanh, giao file qua CDN." },
  { icon: Sparkles,title: "Preset & Template", desc: "Màu, motion, caption tối ưu Ads. Giảm ~40% thời gian hậu kỳ." },
];

const packages = [
  {
    name: "Quick Media – 3 Day Sprint",
    price: "2.990.000₫",
    highlight: true,
    points: [
      "01 video 15–45s tối ưu Ads",
      "Hook/CTA sẵn – 1 vòng feedback",
      "Xuất 9:16 + 1:1",
      "Thư viện caption + nhạc đề xuất",
    ],
    cta: "Đặt lịch nhanh",
  },
  {
    name: "Product Photo – KV",
    price: "1.690.000₫",
    points: [
      "05 ảnh key visual studio",
      "Retouch màu & bụi bẩn",
      "01 concept (Minimal/Luxury)",
    ],
    cta: "Nhận báo giá",
  },
  {
    name: "Performance Ad Video",
    price: "3.490.000₫",
    points: [
      "01 video bán hàng 20–30s",
      "Motion headline & price tag",
      "A/B 2 biến thể opening",
    ],
    cta: "Đặt làm ngay",
  },
  {
    name: "Combo Video + Photo",
    price: "4.990.000₫",
    points: [
      "01 video + 05 ảnh KV",
      "Ưu tiên lịch quay trong 24h",
      "Tặng 03 thumbnail tĩnh",
    ],
    cta: "Chốt lịch",
  },
];

const concepts = [
  "UGC kể chuyện", "Studio Minimal", "Lifestyle Natural", "Performance Ads", "Luxury Detail", "Educational/Insight"
];

const portfolio = [
  {title: "Nước hoa – Luxury Detail", tag: "Luxury",   thumb: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop"},
  {title: "Skincare – UGC Review",   tag: "UGC",      thumb: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1200&auto=format&fit=crop"},
  {title: "Đồ uống – Lifestyle",     tag: "Lifestyle",thumb: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop"},
  {title: "Phụ kiện – Minimal",      tag: "Studio",   thumb: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"},
  {title: "FMCG – Performance Ads",  tag: "Ads",      thumb: "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop"},
  {title: "Trang sức – Macro",       tag: "Luxury",   thumb: "https://images.unsplash.com/photo-1612815154908-4b9a2a3c4e7c?q=80&w=1200&auto=format&fit=crop"},
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}

function Feature({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="space-y-2">
        <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function PackageCard({ p }: { p: any }) {
  return (
    <Card className={`relative shadow-sm ${p.highlight ? "border-primary" : ""}`}>
      {p.highlight && <Badge className="absolute -top-3 left-4">Best Seller</Badge>}
      <CardHeader>
        <CardTitle>{p.name}</CardTitle>
        <CardDescription>Áp dụng cho 1 sản phẩm/1 lần sản xuất</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-semibold">{p.price}</div>
        <ul className="space-y-2">
          {p.points.map((pt: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-1" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{p.cta}</Button>
      </CardFooter>
    </Card>
  );
}

function ContactCard() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Liên hệ nhanh</CardTitle>
        <CardDescription>Nhận báo giá trong 15 phút làm việc</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="mailto:hello@kemedia.vn" className="inline-flex items-center gap-2 rounded-xl border p-3 hover:bg-muted">
            <Mail className="w-4 h-4"/> <span>Email</span>
          </a>
          <a href="tel:+84900000000" className="inline-flex items-center gap-2 rounded-xl border p-3 hover:bg-muted">
            <Phone className="w-4 h-4"/> <span>Hotline</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="w-4 h-4"/> <span>Ưu tiên lịch quay trong 24h với gói Combo</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Page() {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", ...new Set(portfolio.map(p => p.tag))];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="container px-4 md:px-6 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="KẾ Media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_LIGHT} alt="KẾ Media" className="h-7 w-auto dark:hidden"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DARK}  alt="KẾ Media" className="h-7 w-auto hidden dark:block"/>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Dịch vụ</a>
            <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
            <a href="#process" className="hover:opacity-80">Quy trình 3 ngày</a>
            <a href="#contact" className="hover:opacity-80">Liên hệ</a>
          </nav>
          <Button asChild size="sm"><a href="#contact">Nhận báo giá</a></Button>
        </div>
      </header>

      {/* Hero */}
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Sản xuất media <span className="text-primary">Nhanh – Gọn – Bán được hàng</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              <strong>Quick Media – 3 Day Sprint:</strong> nhận brief, quay/chụp, hậu kỳ và giao file trong 72 giờ. 
              Tối ưu cho TikTok/Meta Ads, Shop Ads và kênh social.
            </p>
            <div className="flex flex-wrap gap-2">
              {concepts.map((c) => (<Badge key={c} variant="secondary">{c}</Badge>))}
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg"><a href="#services"><Film className="w-4 h-4 mr-2"/>Xem gói dịch vụ</a></Button>
              <Button variant="outline" asChild size="lg"><a href="#portfolio"><Camera className="w-4 h-4 mr-2"/>Xem portfolio</a></Button>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.05}} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_LIGHT} alt="KẾ Media" className="h-20 w-auto opacity-80 dark:hidden"/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_DARK}  alt="KẾ Media" className="h-20 w-auto opacity-80 hidden dark:block"/>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (<Feature key={i} Icon={f.icon} title={f.title} desc={f.desc} />))}
        </div>
      </Section>

      {/* Services / Packages */}
      <Section id="services">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Gói dịch vụ</h2>
          <p className="text-muted-foreground mt-2">Chọn nhanh – báo giá rõ ràng – không phát sinh ngoài phạm vi.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((p, idx) => (<PackageCard key={idx} p={p} />))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          * Giá tham khảo cho 1 sản phẩm. Bảng giá chi tiết & case-study gửi trong 15 phút sau khi nhận yêu cầu.
        </p>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Portfolio chọn lọc</h2>
            <p className="text-muted-foreground mt-2">Một số dự án tiêu biểu gần đây. Có thể cung cấp thêm case-study theo yêu cầu.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {tags.map((t) => (
              <Button key={t} variant={activeTag===t?"default":"outline"} size="sm" onClick={()=>setActiveTag(t)}>{t}</Button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.filter(p=>activeTag==="All"||p.tag===activeTag).map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.thumb} alt={item.title} className="h-56 w-full object-cover transition-transform group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-sm opacity-80">{item.tag}</div>
                <div className="font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex md:hidden gap-2 overflow-x-auto">
          {tags.map((t) => (
            <Button key={t} variant={activeTag===t?"default":"outline"} size="sm" onClick={()=>setActiveTag(t)}>{t}</Button>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Quy trình 3 ngày</h2>
          <p className="text-muted-foreground mt-2">Chuẩn hoá để tăng tốc – giảm vòng lặp – đảm bảo chất lượng.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Ngày 1 – Brief & Concept</CardTitle>
              <CardDescription>Chốt concept, shotlist; đặt cọc 50–70%.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Tạo task, gắn preset phù hợp concept. Sắp lịch quay/chụp.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ngày 2 – Quay/Chụp</CardTitle>
              <CardDescription>Chọn raw, dựng nháp layout.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Gửi preview ngắn; nhận feedback trong 2–3 giờ.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ngày 3 – Hậu kỳ & Giao</CardTitle>
              <CardDescription>Xuất file; gửi link tải + hoá đơn.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Thanh toán phần còn lại để gỡ watermark.</CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">Bắt đầu ngay hôm nay</h2>
            <p className="text-muted-foreground">Gửi 3 đề xuất concept phù hợp trong 12 giờ làm việc. Ưu tiên lịch quay trong 24 giờ cho gói Combo.</p>
            <ContactCard />
          </div>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Yêu cầu báo giá</CardTitle>
              <CardDescription>Điền nhanh để team phản hồi ngay.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <form action="#" className="grid gap-3" onSubmit={(e)=>e.preventDefault()}>
                <Input placeholder="Tên doanh nghiệp / cá nhân" required />
                <Input type="email" placeholder="Email" required />
                <Input type="tel" placeholder="Số điện thoại" required />
                <Tabs defaultValue="video" className="w-full">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="photo">Ảnh</TabsTrigger>
                    <TabsTrigger value="combo">Combo</TabsTrigger>
                  </TabsList>
                  <TabsContent value="video" className="pt-3 text-sm text-muted-foreground">01 video 15–45s, tối ưu Ads, 1 vòng feedback.</TabsContent>
                  <TabsContent value="photo" className="pt-3 text-sm text-muted-foreground">05 ảnh key visual, retouch tiêu chuẩn.</TabsContent>
                  <TabsContent value="combo" className="pt-3 text-sm text-muted-foreground">01 video + 05 ảnh, ưu tiên lịch quay.</TabsContent>
                </Tabs>
                <Textarea placeholder="Mô tả nhanh về sản phẩm / mục tiêu" required />
                <Button className="w-full" type="submit">Gửi yêu cầu</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KẾ Media. All rights reserved.</p>
          <div className="flex gap-3 text-sm">
            <a className="hover:opacity-80" href="#services">Dịch vụ</a>
            <a className="hover:opacity-80" href="#portfolio">Portfolio</a>
            <a className="hover:opacity-80" href="#contact">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
