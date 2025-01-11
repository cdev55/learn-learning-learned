"use client"
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function ReceipeList({receipes}) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="text-4xl font-bold text-gray-800 mb-12 ">
        <h1>Receipes List</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {receipes && receipes?.length ? (receipes?.map((item) => {
              return (
                <Link key={item.id} href={`/receipe-list/${item.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={item.photoUrl}
                          alt={item.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="text-lg font-bold text-gray-800 mt-4">
                        {item.title}
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">
                            {item.cookTime}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })):null}

          </div>
        </div>
      </div>
    </div>
  );
}
