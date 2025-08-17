import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/img/57995094-ede2-41d2-8dff-848519d7013a.jpg", title: "Наша первая встреча" },
    { src: "/img/a7e6a458-5ec2-4fbc-8492-eb1cf31a4c76.jpg", title: "Романтический ужин" },
    { src: "/img/c9b57bcc-ede2-4f18-bc0d-106d3a4f5189.jpg", title: "Прогулка на закате" }
  ];

  const memories = [
    {
      date: "14 февраля 2023",
      title: "Первая встреча",
      description: "В тот особенный день наши пути пересеклись в уютном кафе. Твоя улыбка осветила весь мир, и я понял, что это начало чего-то прекрасного."
    },
    {
      date: "Май 2023",
      title: "Первое путешествие",
      description: "Наше первое путешествие вместе стало незабываемым приключением. Каждый момент, проведенный рядом с тобой, превращался в драгоценное воспоминание."
    },
    {
      date: "Сентябрь 2023",
      title: "Особенный вечер",
      description: "Тот вечер под звездами, когда мы говорили о будущем и мечтах. Твоя рука в моей — это самое дорогое сокровище в моей жизни."
    }
  ];

  const wishes = [
    "Пусть каждый день приносит тебе радость и новые открытия",
    "Пусть твоя улыбка всегда освещает мой мир",
    "Пусть наша любовь растет и крепнет с каждым днем",
    "Пусть все твои мечты обязательно сбудутся",
    "Пусть счастье всегда живет в твоем сердце"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-primary mb-6">
            Для тебя, моя дорогая
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8 leading-relaxed">
            Этот сайт — мой подарок тебе, наполненный любовью и воспоминаниями
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Начать путешествие
            <Icon name="Heart" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-bold text-center text-primary mb-16 animate-slide-up">
            История наших отношений
          </h2>
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transform hover:scale-105 transition-all duration-300 animate-scale-in border-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4">
                      <div className="text-primary font-cormorant text-lg font-semibold mb-2">
                        {memory.date}
                      </div>
                      <h3 className="font-cormorant text-2xl font-bold text-accent">
                        {memory.title}
                      </h3>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-bold text-center text-primary mb-16 animate-slide-up">
            Наши моменты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Card className="overflow-hidden transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-cormorant text-xl font-semibold text-accent text-center">
                      {image.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishes Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-bold text-center text-primary mb-16 animate-slide-up">
            Мои пожелания тебе
          </h2>
          <div className="space-y-6">
            {wishes.map((wish, index) => (
              <Card 
                key={index} 
                className="transform hover:scale-105 transition-all duration-300 animate-fade-in bg-gradient-to-r from-primary/5 to-secondary/30 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" size={24} className="text-primary-foreground" />
                    </div>
                    <p className="text-lg text-accent leading-relaxed">
                      {wish}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl font-bold mb-4">
            С безграничной любовью
          </h3>
          <p className="text-lg opacity-90">
            Ты — самое драгоценное в моей жизни ❤️
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Увеличенное фото"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;