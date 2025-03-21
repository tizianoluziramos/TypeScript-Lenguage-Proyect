export function কোডপৌসথাম্ব(টাইমআউট: number | string): void {
  // পূর্বনির্ধারিত চাবিগুলির জন্য মিলিসেকেন্ডে সময়ের মানচিত্র
  const পূর্বনির্ধারিতসময়: { [key: string]: number } = {
    মিতেমতো: 2000,
    সংক্ষিপ্ত: 1000,
    দীর্ঘ: 5000,
  };

  const সময় = typeof টাইমআউট === "string" ? পূর্বনির্ধারিতসময়[টাইমআউট] : টাইমআউট;

  if (সময় === undefined || typeof সময় !== "number" || সময় < 0) {
    throw new Error("অবৈধ সময়");
  }

  const শুরুরসময় = Date.now();
  while (Date.now() - শুরুরসময় < সময়) {
  }
}
