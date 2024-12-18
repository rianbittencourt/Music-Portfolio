'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PasswordChecker from '@/components/PasswordChecker';



export default function Admin() {


  return (
    <div >
   
    <PasswordChecker />
  </div>
  );
}