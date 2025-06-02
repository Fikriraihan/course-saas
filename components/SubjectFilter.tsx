"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") ?? "all";
  const [selectedSubject, setSelectedSubject] = useState(query);

  useEffect(() => {
    let newUrl = "";
    if (selectedSubject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [searchParams, router, selectedSubject]);

  return (
    <Select
      onValueChange={setSelectedSubject}
      value={selectedSubject}
      defaultValue="all"
    >
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Select subjects" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem className="capitalize" key={subject} value={subject}>
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
