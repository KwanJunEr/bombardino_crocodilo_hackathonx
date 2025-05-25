"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TripData } from "@/app/tourist/dashboard/setup/page";

interface DateDurationStepProps {
  tripData: TripData;
  updateTripData: (data: Partial<TripData>) => void;
  onNext: () => void;
}
const DateDurationStep = ({
  tripData,
  updateTripData,
  onNext,
}: DateDurationStepProps) => {
  const [startDate, setStartDate] = useState(tripData.startDate);
  const [endDate, setEndDate] = useState(tripData.endDate);

  const calculateDuration = (start: string, end: string) => {
    if (!start || !end) return 0;
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    return Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24)) + 1;
  };
  const handleNext = () => {
    const duration = calculateDuration(startDate, endDate);
    updateTripData({ startDate, endDate, duration });
    onNext();
  };

  const isValid =
    startDate && endDate && new Date(endDate) >= new Date(startDate);
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calendar className="w-6 h-6 text-blue-500" />
          Plan Your Fishing Trip
        </CardTitle>
        <p className="text-gray-600">When would you like to go fishing?</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate || new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        {isValid && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700">
              <Clock className="w-5 h-5" />
              <span className="font-medium">
                Trip Duration: {calculateDuration(startDate, endDate)} days
              </span>
            </div>
          </div>
        )}

        <Button
          onClick={handleNext}
          disabled={!isValid}
          className="w-full"
          size="lg"
        >
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default DateDurationStep;
