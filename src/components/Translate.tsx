"use client";

import { useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { debounce } from "@/lib/utils";

export default function Translator() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("ht");

  // Simulate translation - replace with actual API call
  const translateText = useCallback(
    debounce(async (text: string) => {
      // Replace this with actual translation API call
      setTranslatedText(`Translated: ${text}`);
    }, 500),
    []
  );

  const handleTextChange = (text: string) => {
    if (text.length <= 5000) {
      setSourceText(text);
      translateText(text);
    }
  };

  const switchLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <main className="container mx-auto max-w-5xl p-4 min-h-[calc(100vh-80px)] flex flex-col justify-center -mt-32">
      <div className="space-y-4">
        <Tabs defaultValue="text" className="w-full">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="documents" disabled>
              Documents
            </TabsTrigger>
            <TabsTrigger value="websites" disabled>
              Websites
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center justify-between gap-4">
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ht">Haitian Creole</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="icon"
            onClick={switchLanguages}
            className="rounded-full"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </Button>

          <Select value={targetLang} onValueChange={setTargetLang}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ht">Haitian Creole</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Enter text to translate..."
              className="min-h-[300px] resize-none"
              value={sourceText}
              onChange={(e) => handleTextChange(e.target.value)}
            />
            <div className="text-sm text-muted-foreground text-right">
              {sourceText.length} / 5000
            </div>
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Translation"
              className="min-h-[300px] resize-none"
              value={translatedText}
              readOnly
            />
          </div>
        </div>
      </div>
    </main>
  );
}
