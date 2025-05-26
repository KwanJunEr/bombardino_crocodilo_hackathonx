import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Gift, AlertTriangle } from "lucide-react";

interface CreateChallengeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateChallengeDialog = ({ open, onOpenChange }: CreateChallengeDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Challenge created!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            Create New Challenge
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Challenge Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base font-semibold flex items-center gap-2">
              <Target className="w-4 h-4" />
              Challenge Title
            </Label>
            <Input
              id="title"
              placeholder="Enter an exciting challenge title..."
              className="text-base"
              required
            />
          </div>

          {/* Challenge Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-semibold">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your challenge in detail..."
              className="min-h-[100px] text-base"
              required
            />
          </div>

          {/* Challenge Rules */}
          <div className="space-y-2">
            <Label htmlFor="rules" className="text-base font-semibold">
              Rules & Guidelines
            </Label>
            <Textarea
              id="rules"
              placeholder="List the rules and guidelines for this challenge..."
              className="min-h-[120px] text-base"
              required
            />
          </div>

          {/* Rewards Section */}
          <Card className="border border-green-200 bg-green-50">
            <CardContent className="p-4">
              <Label htmlFor="reward" className="text-base font-semibold flex items-center gap-2 text-green-700 mb-3">
                <Gift className="w-4 h-4" />
                Reward for Winner
              </Label>
              <Textarea
                id="reward"
                placeholder="What will the winner receive? (e.g., bragging rights, prizes, recognition...)"
                className="min-h-[80px] text-base bg-white border-green-300"
                required
              />
            </CardContent>
          </Card>

          {/* Punishment Section */}
          <Card className="border border-red-200 bg-red-50">
            <CardContent className="p-4">
              <Label htmlFor="punishment" className="text-base font-semibold flex items-center gap-2 text-red-700 mb-3">
                <AlertTriangle className="w-4 h-4" />
                Consequence for Last Place
              </Label>
              <Textarea
                id="punishment"
                placeholder="What happens to the person who comes last? (e.g., clean fishing gear, buy drinks...)"
                className="min-h-[80px] text-base bg-white border-red-300"
                required
              />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Create Challenge
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateChallengeDialog;