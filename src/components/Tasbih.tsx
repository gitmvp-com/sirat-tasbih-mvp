import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { RotateCcw, Plus, Minus, Moon, Sun } from "lucide-react";

const dhikrOptions = [
  { arabic: "سُبْحَانَ اللّٰهِ", transliteration: "SubḥānAllāh", translation: "Glory be to Allah" },
  { arabic: "الْحَمْدُ لِلّٰهِ", transliteration: "Alḥamdulillāh", translation: "Praise be to Allah" },
  { arabic: "اللّٰهُ أَكْبَرُ", transliteration: "Allāhu Akbar", translation: "Allah is the Greatest" },
  { arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ", transliteration: "Lā ilāha illAllāh", translation: "There is no god but Allah" },
  { arabic: "أَسْتَغْفِرُ اللّٰهَ", transliteration: "Astaghfirullāh", translation: "I seek forgiveness from Allah" },
];

export default function Tasbih() {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(dhikrOptions[0]);
  const [isDark, setIsDark] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 transition-colors duration-500">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Digital Tasbīḥ</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="glass-effect smooth-transition"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Main Counter */}
        <Card className="glass-effect apple-shadow p-8 text-center smooth-transition">
          <div className="space-y-6">
            {/* Dhikr Selection */}
            <div className="space-y-3">
              <h2 className="arabic-font text-4xl text-primary font-bold">
                {selectedDhikr.arabic}
              </h2>
              <p className="text-sm text-muted-foreground italic">
                {selectedDhikr.transliteration}
              </p>
              <p className="text-xs text-muted-foreground">
                {selectedDhikr.translation}
              </p>
            </div>

            {/* Counter Display */}
            <div className="my-8">
              <div className="text-7xl font-bold text-primary tabular-nums">
                {count}
              </div>
              <p className="text-sm text-muted-foreground mt-2">times</p>
            </div>

            {/* Control Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={decrement}
                className="glass-effect smooth-transition hover:scale-105"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                onClick={increment}
                className="bg-primary hover:bg-primary/90 smooth-transition hover:scale-105 text-lg"
              >
                <Plus className="h-5 w-5 mr-2" />
                Count
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={reset}
                className="glass-effect smooth-transition hover:scale-105"
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Dhikr Options */}
        <Card className="glass-effect apple-shadow p-4 smooth-transition">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">Select Dhikr</h3>
          <div className="space-y-2">
            {dhikrOptions.map((dhikr, index) => (
              <button
                key={index}
                onClick={() => setSelectedDhikr(dhikr)}
                className={`w-full p-3 rounded-lg text-left smooth-transition ${
                  selectedDhikr.arabic === dhikr.arabic
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                <div className="arabic-font text-lg font-semibold">{dhikr.arabic}</div>
                <div className="text-xs opacity-80 mt-1">{dhikr.transliteration}</div>
              </button>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          May your dhikr be accepted 🤲
        </p>
      </div>
    </div>
  );
}