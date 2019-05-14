var N=null,E="",T="t",U="u",searchIndex={};
var R=["Inner Shareable is the required shareability domain, reads…","Non-shareable is the required shareability domain, reads…","ARM-specific 64-bit wide vector of four packed `u16`.","ARM-specific 128-bit wide vector of sixteen packed `u8`.","ARM-specific 128-bit wide vector of eight packed `u16`.","Full system is the required shareability domain, reads and…","Full system is the required shareability domain, writes…","Inner Shareable is the required shareability domain,…","Non-shareable is the required shareability domain, writes…","Outer Shareable is the required shareability domain, reads…","Outer Shareable is the required shareability domain,…","Full system is the required shareability domain, reads are…","Outher Shareable is the required shareability domain,…","Counts the leading most significant bits set.","float64x1_t","Vector add.","float64x2_t","int8x8_t","Horizontal vector max.","int8x16_t","int16x4_t","int16x8_t","int32x2_t","int32x4_t","uint8x8_t","uint8x16_t","uint16x4_t","uint16x8_t","uint32x2_t","uint32x4_t","float32x2_t","float32x4_t","Horizontal vector min.","Folding minimum of adjacent pairs","Folding maximum of adjacent pairs","Vector combine","int64x1_t","int64x2_t","uint64x1_t","uint64x2_t","poly64x1_t","poly64x2_t","poly8x8_t","poly8x16_t","poly16x4_t","poly16x8_t","Table look-up","int8x8x2_t","uint8x8x2_t","poly8x8x2_t","int8x8x3_t","uint8x8x3_t","poly8x8x3_t","int8x8x4_t","uint8x8x4_t","poly8x8x4_t","Extended table look-up","int8x16x2_t","uint8x16x2_t","poly8x16x2_t","int8x16x3_t","uint8x16x3_t","poly8x16x3_t","int8x16x4_t","uint8x16x4_t","poly8x16x4_t","Reverse the order of the bytes.","_rev_u16","_rev_u32","Count Leading Zeros.","Reverse the bit order.","Vector long add.","Vector narrow integer.","Vector long move.","Generates a DMB (data memory barrier) instruction or…","Generates a DSB (data synchronization barrier) instruction…","Generates an ISB (instruction synchronization barrier)…","Generates a WFI (wait for interrupt) hint instruction, or…","Generates a WFE (wait for event) hint instruction, or…","Generates a SEV (send a global event) hint instruction.","Generates a send a local event hint instruction.","Generates a YIELD hint instruction.","Generates an unspecified no-op instruction.","Reads a 32-bit system register","Reads a 64-bit system register","Reads a system register containing an address","Writes a 32-bit system register","Writes a 64-bit system register","Writes a system register containing an address","try_from","try_into","borrow_mut","result","type_id","borrow","typeid","formatter"];
searchIndex["core_arch"]={"doc":"SIMD and vendor intrinsics module.","i":[[0,"aarch64","core_arch","Platform-specific intrinsics for the `aarch64` platform.",N,N],[3,R[14],"core_arch::aarch64","ARM-specific 64-bit wide vector of one packed `f64`.",N,N],[3,R[16],E,"ARM-specific 128-bit wide vector of two packed `f64`.",N,N],[3,R[40],E,"ARM-specific 64-bit wide vector of one packed `p64`.",N,N],[3,R[41],E,"ARM-specific 64-bit wide vector of two packed `p64`.",N,N],[3,R[57],E,"ARM-specific type containing two `int8x16_t` vectors.",N,N],[12,"0",E,E,0,N],[12,"1",E,E,0,N],[3,R[60],E,"ARM-specific type containing three `int8x16_t` vectors.",N,N],[12,"0",E,E,1,N],[12,"1",E,E,1,N],[12,"2",E,E,1,N],[3,R[63],E,"ARM-specific type containing four `int8x16_t` vectors.",N,N],[12,"0",E,E,2,N],[12,"1",E,E,2,N],[12,"2",E,E,2,N],[12,"3",E,E,2,N],[3,R[58],E,"ARM-specific type containing two `uint8x16_t` vectors.",N,N],[12,"0",E,E,3,N],[12,"1",E,E,3,N],[3,R[61],E,"ARM-specific type containing three `uint8x16_t` vectors.",N,N],[12,"0",E,E,4,N],[12,"1",E,E,4,N],[12,"2",E,E,4,N],[3,R[64],E,"ARM-specific type containing four `uint8x16_t` vectors.",N,N],[12,"0",E,E,5,N],[12,"1",E,E,5,N],[12,"2",E,E,5,N],[12,"3",E,E,5,N],[3,R[59],E,"ARM-specific type containing two `poly8x16_t` vectors.",N,N],[12,"0",E,E,6,N],[12,"1",E,E,6,N],[3,R[62],E,"ARM-specific type containing three `poly8x16_t` vectors.",N,N],[12,"0",E,E,7,N],[12,"1",E,E,7,N],[12,"2",E,E,7,N],[3,R[65],E,"ARM-specific type containing four `poly8x16_t` vectors.",N,N],[12,"0",E,E,8,N],[12,"1",E,E,8,N],[12,"2",E,E,8,N],[12,"3",E,E,8,N],[3,"SY",E,R[5],N,N],[3,"ST",E,R[6],N,N],[3,"ISH",E,R[0],N,N],[3,"ISHST",E,R[7],N,N],[3,"NSH",E,R[1],N,N],[3,"NSHST",E,R[8],N,N],[3,"OSH",E,R[9],N,N],[3,"OSHST",E,R[10],N,N],[3,"LD",E,R[11],N,N],[3,"ISHLD",E,R[0],N,N],[3,"NSHLD",E,R[1],N,N],[3,"OSHLD",E,R[12],N,N],[3,R[17],E,"ARM-specific 64-bit wide vector of eight packed `i8`.",N,N],[3,R[24],E,"ARM-specific 64-bit wide vector of eight packed `u8`.",N,N],[3,R[42],E,"ARM-specific 64-bit wide polynomial vector of eight packed…",N,N],[3,R[20],E,"ARM-specific 64-bit wide vector of four packed `i16`.",N,N],[3,R[26],E,R[2],N,N],[3,R[44],E,R[2],N,N],[3,R[22],E,"ARM-specific 64-bit wide vector of two packed `i32`.",N,N],[3,R[28],E,"ARM-specific 64-bit wide vector of two packed `u32`.",N,N],[3,R[30],E,"ARM-specific 64-bit wide vector of two packed `f32`.",N,N],[3,R[36],E,"ARM-specific 64-bit wide vector of one packed `i64`.",N,N],[3,R[38],E,"ARM-specific 64-bit wide vector of one packed `u64`.",N,N],[3,R[19],E,"ARM-specific 128-bit wide vector of sixteen packed `i8`.",N,N],[3,R[25],E,R[3],N,N],[3,R[43],E,R[3],N,N],[3,R[21],E,"ARM-specific 128-bit wide vector of eight packed `i16`.",N,N],[3,R[27],E,R[4],N,N],[3,R[45],E,R[4],N,N],[3,R[23],E,"ARM-specific 128-bit wide vector of four packed `i32`.",N,N],[3,R[29],E,"ARM-specific 128-bit wide vector of four packed `u32`.",N,N],[3,R[31],E,"ARM-specific 128-bit wide vector of four packed `f32`.",N,N],[3,R[37],E,"ARM-specific 128-bit wide vector of two packed `i64`.",N,N],[3,R[39],E,"ARM-specific 128-bit wide vector of two packed `u64`.",N,N],[3,R[47],E,"ARM-specific type containing two `int8x8_t` vectors.",N,N],[12,"0",E,E,9,N],[12,"1",E,E,9,N],[3,R[50],E,"ARM-specific type containing three `int8x8_t` vectors.",N,N],[12,"0",E,E,10,N],[12,"1",E,E,10,N],[12,"2",E,E,10,N],[3,R[53],E,"ARM-specific type containing four `int8x8_t` vectors.",N,N],[12,"0",E,E,11,N],[12,"1",E,E,11,N],[12,"2",E,E,11,N],[12,"3",E,E,11,N],[3,R[48],E,"ARM-specific type containing two `uint8x8_t` vectors.",N,N],[12,"0",E,E,12,N],[12,"1",E,E,12,N],[3,R[51],E,"ARM-specific type containing three `uint8x8_t` vectors.",N,N],[12,"0",E,E,13,N],[12,"1",E,E,13,N],[12,"2",E,E,13,N],[3,R[54],E,"ARM-specific type containing four `uint8x8_t` vectors.",N,N],[12,"0",E,E,14,N],[12,"1",E,E,14,N],[12,"2",E,E,14,N],[12,"3",E,E,14,N],[3,R[49],E,"ARM-specific type containing two `poly8x8_t` vectors.",N,N],[12,"0",E,E,15,N],[12,"1",E,E,15,N],[3,R[52],E,"ARM-specific type containing three `poly8x8_t` vectors.",N,N],[12,"0",E,E,16,N],[12,"1",E,E,16,N],[12,"2",E,E,16,N],[3,R[55],E,"ARM-specific type containing four `poly8x8_t` vectors.",N,N],[12,"0",E,E,17,N],[12,"1",E,E,17,N],[12,"2",E,E,17,N],[12,"3",E,E,17,N],[3,"SY",E,R[5],N,N],[3,"ST",E,R[6],N,N],[3,"ISH",E,R[0],N,N],[3,"ISHST",E,R[7],N,N],[3,"NSH",E,R[1],N,N],[3,"NSHST",E,R[8],N,N],[3,"OSH",E,R[9],N,N],[3,"OSHST",E,R[10],N,N],[3,"LD",E,R[11],N,N],[3,"ISHLD",E,R[0],N,N],[3,"NSHLD",E,R[1],N,N],[3,"OSHLD",E,R[12],N,N],[5,"_rev_u64",E,R[66],N,[[["u64"]],["u64"]]],[5,"_clz_u64",E,R[69],N,[[["u64"]],["u64"]]],[5,"_rbit_u64",E,R[70],N,[[["u64"]],["u64"]]],[5,"_cls_u32",E,R[13],N,[[["u32"]],["u32"]]],[5,"_cls_u64",E,R[13],N,[[["u64"]],["u64"]]],[5,"vadd_f64",E,R[15],N,[[[R[14]]],[R[14]]]],[5,"vaddq_f64",E,R[15],N,[[[R[16]]],[R[16]]]],[5,"vaddd_s64",E,R[15],N,[[["i64"]],["i64"]]],[5,"vaddd_u64",E,R[15],N,[[["u64"]],["u64"]]],[5,"vmaxv_s8",E,R[18],N,[[[R[17]]],["i8"]]],[5,"vmaxvq_s8",E,R[18],N,[[[R[19]]],["i8"]]],[5,"vmaxv_s16",E,R[18],N,[[[R[20]]],["i16"]]],[5,"vmaxvq_s16",E,R[18],N,[[[R[21]]],["i16"]]],[5,"vmaxv_s32",E,R[18],N,[[[R[22]]],["i32"]]],[5,"vmaxvq_s32",E,R[18],N,[[[R[23]]],["i32"]]],[5,"vmaxv_u8",E,R[18],N,[[[R[24]]],["u8"]]],[5,"vmaxvq_u8",E,R[18],N,[[[R[25]]],["u8"]]],[5,"vmaxv_u16",E,R[18],N,[[[R[26]]],["u16"]]],[5,"vmaxvq_u16",E,R[18],N,[[[R[27]]],["u16"]]],[5,"vmaxv_u32",E,R[18],N,[[[R[28]]],["u32"]]],[5,"vmaxvq_u32",E,R[18],N,[[[R[29]]],["u32"]]],[5,"vmaxv_f32",E,R[18],N,[[[R[30]]],["f32"]]],[5,"vmaxvq_f32",E,R[18],N,[[[R[31]]],["f32"]]],[5,"vmaxvq_f64",E,R[18],N,[[[R[16]]],["f64"]]],[5,"vminv_s8",E,R[32],N,[[[R[17]]],["i8"]]],[5,"vminvq_s8",E,R[32],N,[[[R[19]]],["i8"]]],[5,"vminv_s16",E,R[32],N,[[[R[20]]],["i16"]]],[5,"vminvq_s16",E,R[32],N,[[[R[21]]],["i16"]]],[5,"vminv_s32",E,R[32],N,[[[R[22]]],["i32"]]],[5,"vminvq_s32",E,R[32],N,[[[R[23]]],["i32"]]],[5,"vminv_u8",E,R[32],N,[[[R[24]]],["u8"]]],[5,"vminvq_u8",E,R[32],N,[[[R[25]]],["u8"]]],[5,"vminv_u16",E,R[32],N,[[[R[26]]],["u16"]]],[5,"vminvq_u16",E,R[32],N,[[[R[27]]],["u16"]]],[5,"vminv_u32",E,R[32],N,[[[R[28]]],["u32"]]],[5,"vminvq_u32",E,R[32],N,[[[R[29]]],["u32"]]],[5,"vminv_f32",E,R[32],N,[[[R[30]]],["f32"]]],[5,"vminvq_f32",E,R[32],N,[[[R[31]]],["f32"]]],[5,"vminvq_f64",E,R[32],N,[[[R[16]]],["f64"]]],[5,"vpminq_s8",E,R[33],N,[[[R[19]]],[R[19]]]],[5,"vpminq_s16",E,R[33],N,[[[R[21]]],[R[21]]]],[5,"vpminq_s32",E,R[33],N,[[[R[23]]],[R[23]]]],[5,"vpminq_u8",E,R[33],N,[[[R[25]]],[R[25]]]],[5,"vpminq_u16",E,R[33],N,[[[R[27]]],[R[27]]]],[5,"vpminq_u32",E,R[33],N,[[[R[29]]],[R[29]]]],[5,"vpminq_f32",E,R[33],N,[[[R[31]]],[R[31]]]],[5,"vpminq_f64",E,R[33],N,[[[R[16]]],[R[16]]]],[5,"vpmaxq_s8",E,R[34],N,[[[R[19]]],[R[19]]]],[5,"vpmaxq_s16",E,R[34],N,[[[R[21]]],[R[21]]]],[5,"vpmaxq_s32",E,R[34],N,[[[R[23]]],[R[23]]]],[5,"vpmaxq_u8",E,R[34],N,[[[R[25]]],[R[25]]]],[5,"vpmaxq_u16",E,R[34],N,[[[R[27]]],[R[27]]]],[5,"vpmaxq_u32",E,R[34],N,[[[R[29]]],[R[29]]]],[5,"vpmaxq_f32",E,R[34],N,[[[R[31]]],[R[31]]]],[5,"vpmaxq_f64",E,R[34],N,[[[R[16]]],[R[16]]]],[5,"vcombine_s8",E,R[35],N,[[[R[17]]],[R[19]]]],[5,"vcombine_s16",E,R[35],N,[[[R[20]]],[R[21]]]],[5,"vcombine_s32",E,R[35],N,[[[R[22]]],[R[23]]]],[5,"vcombine_s64",E,R[35],N,[[[R[36]]],[R[37]]]],[5,"vcombine_u8",E,R[35],N,[[[R[24]]],[R[25]]]],[5,"vcombine_u16",E,R[35],N,[[[R[26]]],[R[27]]]],[5,"vcombine_u32",E,R[35],N,[[[R[28]]],[R[29]]]],[5,"vcombine_u64",E,R[35],N,[[[R[38]]],[R[39]]]],[5,"vcombine_p64",E,R[35],N,[[[R[40]]],[R[41]]]],[5,"vcombine_f32",E,R[35],N,[[[R[30]]],[R[31]]]],[5,"vcombine_p8",E,R[35],N,[[[R[42]]],[R[43]]]],[5,"vcombine_p16",E,R[35],N,[[[R[44]]],[R[45]]]],[5,"vcombine_f64",E,R[35],N,[[[R[14]]],[R[16]]]],[5,"vtbl1_s8",E,R[46],N,[[[R[17]]],[R[17]]]],[5,"vtbl1_u8",E,R[46],N,[[[R[24]]],[R[24]]]],[5,"vtbl1_p8",E,R[46],N,[[[R[42]],[R[24]]],[R[42]]]],[5,"vtbl2_s8",E,R[46],N,[[[R[47]],[R[17]]],[R[17]]]],[5,"vtbl2_u8",E,R[46],N,[[[R[24]],[R[48]]],[R[24]]]],[5,"vtbl2_p8",E,R[46],N,[[[R[24]],[R[49]]],[R[42]]]],[5,"vtbl3_s8",E,R[46],N,[[[R[50]],[R[17]]],[R[17]]]],[5,"vtbl3_u8",E,R[46],N,[[[R[24]],[R[51]]],[R[24]]]],[5,"vtbl3_p8",E,R[46],N,[[[R[24]],[R[52]]],[R[42]]]],[5,"vtbl4_s8",E,R[46],N,[[[R[17]],[R[53]]],[R[17]]]],[5,"vtbl4_u8",E,R[46],N,[[[R[54]],[R[24]]],[R[24]]]],[5,"vtbl4_p8",E,R[46],N,[[[R[55]],[R[24]]],[R[42]]]],[5,"vtbx1_s8",E,R[56],N,[[[R[17]]],[R[17]]]],[5,"vtbx1_u8",E,R[56],N,[[[R[24]]],[R[24]]]],[5,"vtbx1_p8",E,R[56],N,[[[R[42]],[R[24]]],[R[42]]]],[5,"vtbx2_s8",E,R[56],N,[[[R[47]],[R[17]]],[R[17]]]],[5,"vtbx2_u8",E,R[56],N,[[[R[24]],[R[48]]],[R[24]]]],[5,"vtbx2_p8",E,R[56],N,[[[R[42]],[R[24]],[R[49]]],[R[42]]]],[5,"vtbx3_s8",E,R[56],N,[[[R[50]],[R[17]]],[R[17]]]],[5,"vtbx3_u8",E,R[56],N,[[[R[24]],[R[51]]],[R[24]]]],[5,"vtbx3_p8",E,R[56],N,[[[R[42]],[R[24]],[R[52]]],[R[42]]]],[5,"vtbx4_s8",E,R[56],N,[[[R[53]],[R[17]]],[R[17]]]],[5,"vtbx4_u8",E,R[56],N,[[[R[24]],[R[54]]],[R[24]]]],[5,"vtbx4_p8",E,R[56],N,[[[R[42]],[R[55]],[R[24]]],[R[42]]]],[5,"vqtbl1_s8",E,R[46],N,[[[R[19]],[R[24]]],[R[17]]]],[5,"vqtbl1q_s8",E,R[46],N,[[[R[25]],[R[19]]],[R[19]]]],[5,"vqtbl1_u8",E,R[46],N,[[[R[25]],[R[24]]],[R[24]]]],[5,"vqtbl1q_u8",E,R[46],N,[[[R[25]]],[R[25]]]],[5,"vqtbl1_p8",E,R[46],N,[[[R[24]],[R[43]]],[R[42]]]],[5,"vqtbl1q_p8",E,R[46],N,[[[R[25]],[R[43]]],[R[43]]]],[5,"vqtbx1_s8",E,R[56],N,[[[R[19]],[R[24]],[R[17]]],[R[17]]]],[5,"vqtbx1q_s8",E,R[56],N,[[[R[25]],[R[19]]],[R[19]]]],[5,"vqtbx1_u8",E,R[56],N,[[[R[25]],[R[24]]],[R[24]]]],[5,"vqtbx1q_u8",E,R[56],N,[[[R[25]]],[R[25]]]],[5,"vqtbx1_p8",E,R[56],N,[[[R[42]],[R[24]],[R[43]]],[R[42]]]],[5,"vqtbx1q_p8",E,R[56],N,[[[R[25]],[R[43]]],[R[43]]]],[5,"vqtbl2_s8",E,R[46],N,[[[R[57]],[R[24]]],[R[17]]]],[5,"vqtbl2q_s8",E,R[46],N,[[[R[57]],[R[25]]],[R[19]]]],[5,"vqtbl2_u8",E,R[46],N,[[[R[24]],[R[58]]],[R[24]]]],[5,"vqtbl2q_u8",E,R[46],N,[[[R[25]],[R[58]]],[R[25]]]],[5,"vqtbl2_p8",E,R[46],N,[[[R[24]],[R[59]]],[R[42]]]],[5,"vqtbl2q_p8",E,R[46],N,[[[R[25]],[R[59]]],[R[43]]]],[5,"vqtbx2_s8",E,R[56],N,[[[R[57]],[R[24]],[R[17]]],[R[17]]]],[5,"vqtbx2q_s8",E,R[56],N,[[[R[57]],[R[19]],[R[25]]],[R[19]]]],[5,"vqtbx2_u8",E,R[56],N,[[[R[24]],[R[58]]],[R[24]]]],[5,"vqtbx2q_u8",E,R[56],N,[[[R[25]],[R[58]]],[R[25]]]],[5,"vqtbx2_p8",E,R[56],N,[[[R[42]],[R[24]],[R[59]]],[R[42]]]],[5,"vqtbx2q_p8",E,R[56],N,[[[R[25]],[R[59]],[R[43]]],[R[43]]]],[5,"vqtbl3_s8",E,R[46],N,[[[R[60]],[R[24]]],[R[17]]]],[5,"vqtbl3q_s8",E,R[46],N,[[[R[60]],[R[25]]],[R[19]]]],[5,"vqtbl3_u8",E,R[46],N,[[[R[61]],[R[24]]],[R[24]]]],[5,"vqtbl3q_u8",E,R[46],N,[[[R[25]],[R[61]]],[R[25]]]],[5,"vqtbl3_p8",E,R[46],N,[[[R[24]],[R[62]]],[R[42]]]],[5,"vqtbl3q_p8",E,R[46],N,[[[R[25]],[R[62]]],[R[43]]]],[5,"vqtbx3_s8",E,R[56],N,[[[R[60]],[R[24]],[R[17]]],[R[17]]]],[5,"vqtbx3q_s8",E,R[56],N,[[[R[60]],[R[19]],[R[25]]],[R[19]]]],[5,"vqtbx3_u8",E,R[56],N,[[[R[24]],[R[61]]],[R[24]]]],[5,"vqtbx3q_u8",E,R[56],N,[[[R[25]],[R[61]]],[R[25]]]],[5,"vqtbx3_p8",E,R[56],N,[[[R[42]],[R[24]],[R[62]]],[R[42]]]],[5,"vqtbx3q_p8",E,R[56],N,[[[R[25]],[R[62]],[R[43]]],[R[43]]]],[5,"vqtbl4_s8",E,R[46],N,[[[R[24]],[R[63]]],[R[17]]]],[5,"vqtbl4q_s8",E,R[46],N,[[[R[25]],[R[63]]],[R[19]]]],[5,"vqtbl4_u8",E,R[46],N,[[[R[64]],[R[24]]],[R[24]]]],[5,"vqtbl4q_u8",E,R[46],N,[[[R[64]],[R[25]]],[R[25]]]],[5,"vqtbl4_p8",E,R[46],N,[[[R[24]],[R[65]]],[R[42]]]],[5,"vqtbl4q_p8",E,R[46],N,[[[R[25]],[R[65]]],[R[43]]]],[5,"vqtbx4_s8",E,R[56],N,[[[R[63]],[R[24]],[R[17]]],[R[17]]]],[5,"vqtbx4q_s8",E,R[56],N,[[[R[25]],[R[19]],[R[63]]],[R[19]]]],[5,"vqtbx4_u8",E,R[56],N,[[[R[64]],[R[24]]],[R[24]]]],[5,"vqtbx4q_u8",E,R[56],N,[[[R[25]],[R[64]]],[R[25]]]],[5,"vqtbx4_p8",E,R[56],N,[[[R[42]],[R[24]],[R[65]]],[R[42]]]],[5,"vqtbx4q_p8",E,R[56],N,[[[R[65]],[R[25]],[R[43]]],[R[43]]]],[5,"vaeseq_u8",E,"AES single round encryption.",N,[[[R[25]]],[R[25]]]],[5,"vaesdq_u8",E,"AES single round decryption.",N,[[[R[25]]],[R[25]]]],[5,"vaesmcq_u8",E,"AES mix columns.",N,[[[R[25]]],[R[25]]]],[5,"vaesimcq_u8",E,"AES inverse mix columns.",N,[[[R[25]]],[R[25]]]],[5,"vsha1h_u32",E,"SHA1 fixed rotate.",N,[[["u32"]],["u32"]]],[5,"vsha1cq_u32",E,"SHA1 hash update accelerator, choose.",N,[[["u32"],[R[29]]],[R[29]]]],[5,"vsha1mq_u32",E,"SHA1 hash update accelerator, majority.",N,[[["u32"],[R[29]]],[R[29]]]],[5,"vsha1pq_u32",E,"SHA1 hash update accelerator, parity.",N,[[["u32"],[R[29]]],[R[29]]]],[5,"vsha1su0q_u32",E,"SHA1 schedule update accelerator, first part.",N,[[[R[29]]],[R[29]]]],[5,"vsha1su1q_u32",E,"SHA1 schedule update accelerator, second part.",N,[[[R[29]]],[R[29]]]],[5,"vsha256hq_u32",E,"SHA256 hash update accelerator.",N,[[[R[29]]],[R[29]]]],[5,"vsha256h2q_u32",E,"SHA256 hash update accelerator, upper part.",N,[[[R[29]]],[R[29]]]],[5,"vsha256su0q_u32",E,"SHA256 schedule update accelerator, first part.",N,[[[R[29]]],[R[29]]]],[5,"vsha256su1q_u32",E,"SHA256 schedule update accelerator, second part.",N,[[[R[29]]],[R[29]]]],[5,"__crc32b",E,"CRC32 single round checksum for bytes (8 bits).",N,[[["u32"],["u8"]],["u32"]]],[5,"__crc32h",E,"CRC32 single round checksum for half words (16 bits).",N,[[["u16"],["u32"]],["u32"]]],[5,"__crc32w",E,"CRC32 single round checksum for words (32 bits).",N,[[["u32"]],["u32"]]],[5,"__crc32d",E,"CRC32 single round checksum for quad words (64 bits).",N,[[["u32"],["u64"]],["u32"]]],[5,"__crc32cb",E,"CRC32-C single round checksum for bytes (8 bits).",N,[[["u32"],["u8"]],["u32"]]],[5,"__crc32ch",E,"CRC32-C single round checksum for half words (16 bits).",N,[[["u16"],["u32"]],["u32"]]],[5,"__crc32cw",E,"CRC32-C single round checksum for words (32 bits).",N,[[["u32"]],["u32"]]],[5,"__crc32cd",E,"CRC32-C single round checksum for quad words (64 bits).",N,[[["u32"],["u64"]],["u32"]]],[5,"__dmb",E,R[74],N,[[["a"]]]],[5,"__dsb",E,R[75],N,[[["a"]]]],[5,"__isb",E,R[76],N,[[["a"]]]],[5,"__wfi",E,R[77],N,[[]]],[5,"__wfe",E,R[78],N,[[]]],[5,"__sev",E,R[79],N,[[]]],[5,"__sevl",E,R[80],N,[[]]],[5,"__yield",E,R[81],N,[[]]],[5,"__nop",E,R[82],N,[[]]],[5,"__rsr",E,R[83],N,[[["r"]],["u32"]]],[5,"__rsr64",E,R[84],N,[[["r"]],["u64"]]],[5,"__rsrp",E,R[85],N,[[["r"]]]],[5,"__wsr",E,R[86],N,[[["u32"],["r"]]]],[5,"__wsr64",E,R[87],N,[[["u64"],["r"]]]],[5,"__wsrp",E,R[88],N,[[["r"]]]],[5,"brk",E,"Generates the trap instruction `BRK 1`",N,[[]]],[5,"__breakpoint",E,"Inserts a breakpoint instruction.",N,[[["i32"]]]],[5,R[67],E,R[66],N,[[["u16"]],["u16"]]],[5,R[68],E,R[66],N,[[["u32"]],["u32"]]],[5,R[67],E,R[66],N,[[["u16"]],["u16"]]],[5,R[68],E,R[66],N,[[["u32"]],["u32"]]],[5,"_clz_u8",E,R[69],N,[[["u8"]],["u8"]]],[5,"_clz_u16",E,R[69],N,[[["u16"]],["u16"]]],[5,"_clz_u32",E,R[69],N,[[["u32"]],["u32"]]],[5,"_rbit_u32",E,R[70],N,[[["u32"]],["u32"]]],[5,"vadd_s8",E,R[15],N,[[[R[17]]],[R[17]]]],[5,"vaddq_s8",E,R[15],N,[[[R[19]]],[R[19]]]],[5,"vadd_s16",E,R[15],N,[[[R[20]]],[R[20]]]],[5,"vaddq_s16",E,R[15],N,[[[R[21]]],[R[21]]]],[5,"vadd_s32",E,R[15],N,[[[R[22]]],[R[22]]]],[5,"vaddq_s32",E,R[15],N,[[[R[23]]],[R[23]]]],[5,"vaddq_s64",E,R[15],N,[[[R[37]]],[R[37]]]],[5,"vadd_u8",E,R[15],N,[[[R[24]]],[R[24]]]],[5,"vaddq_u8",E,R[15],N,[[[R[25]]],[R[25]]]],[5,"vadd_u16",E,R[15],N,[[[R[26]]],[R[26]]]],[5,"vaddq_u16",E,R[15],N,[[[R[27]]],[R[27]]]],[5,"vadd_u32",E,R[15],N,[[[R[28]]],[R[28]]]],[5,"vaddq_u32",E,R[15],N,[[[R[29]]],[R[29]]]],[5,"vaddq_u64",E,R[15],N,[[[R[39]]],[R[39]]]],[5,"vadd_f32",E,R[15],N,[[[R[30]]],[R[30]]]],[5,"vaddq_f32",E,R[15],N,[[[R[31]]],[R[31]]]],[5,"vaddl_s8",E,R[71],N,[[[R[17]]],[R[21]]]],[5,"vaddl_s16",E,R[71],N,[[[R[20]]],[R[23]]]],[5,"vaddl_s32",E,R[71],N,[[[R[22]]],[R[37]]]],[5,"vaddl_u8",E,R[71],N,[[[R[24]]],[R[27]]]],[5,"vaddl_u16",E,R[71],N,[[[R[26]]],[R[29]]]],[5,"vaddl_u32",E,R[71],N,[[[R[28]]],[R[39]]]],[5,"vmovn_s16",E,R[72],N,[[[R[21]]],[R[17]]]],[5,"vmovn_s32",E,R[72],N,[[[R[23]]],[R[20]]]],[5,"vmovn_s64",E,R[72],N,[[[R[37]]],[R[22]]]],[5,"vmovn_u16",E,R[72],N,[[[R[27]]],[R[24]]]],[5,"vmovn_u32",E,R[72],N,[[[R[29]]],[R[26]]]],[5,"vmovn_u64",E,R[72],N,[[[R[39]]],[R[28]]]],[5,"vmovl_s8",E,R[73],N,[[[R[17]]],[R[21]]]],[5,"vmovl_s16",E,R[73],N,[[[R[20]]],[R[23]]]],[5,"vmovl_s32",E,R[73],N,[[[R[22]]],[R[37]]]],[5,"vmovl_u8",E,R[73],N,[[[R[24]]],[R[27]]]],[5,"vmovl_u16",E,R[73],N,[[[R[26]]],[R[29]]]],[5,"vmovl_u32",E,R[73],N,[[[R[28]]],[R[39]]]],[5,"vrsqrte_f32",E,"Reciprocal square-root estimate.",N,[[[R[30]]],[R[30]]]],[5,"vpmin_s8",E,R[33],N,[[[R[17]]],[R[17]]]],[5,"vpmin_s16",E,R[33],N,[[[R[20]]],[R[20]]]],[5,"vpmin_s32",E,R[33],N,[[[R[22]]],[R[22]]]],[5,"vpmin_u8",E,R[33],N,[[[R[24]]],[R[24]]]],[5,"vpmin_u16",E,R[33],N,[[[R[26]]],[R[26]]]],[5,"vpmin_u32",E,R[33],N,[[[R[28]]],[R[28]]]],[5,"vpmin_f32",E,R[33],N,[[[R[30]]],[R[30]]]],[5,"vpmax_s8",E,R[34],N,[[[R[17]]],[R[17]]]],[5,"vpmax_s16",E,R[34],N,[[[R[20]]],[R[20]]]],[5,"vpmax_s32",E,R[34],N,[[[R[22]]],[R[22]]]],[5,"vpmax_u8",E,R[34],N,[[[R[24]]],[R[24]]]],[5,"vpmax_u16",E,R[34],N,[[[R[26]]],[R[26]]]],[5,"vpmax_u32",E,R[34],N,[[[R[28]]],[R[28]]]],[5,"vpmax_f32",E,R[34],N,[[[R[30]]],[R[30]]]],[5,"__dmb",E,R[74],N,[[["a"]]]],[5,"__dsb",E,R[75],N,[[["a"]]]],[5,"__isb",E,R[76],N,[[["a"]]]],[5,"__wfi",E,R[77],N,[[]]],[5,"__wfe",E,R[78],N,[[]]],[5,"__sev",E,R[79],N,[[]]],[5,"__sevl",E,R[80],N,[[]]],[5,"__yield",E,R[81],N,[[]]],[5,"__nop",E,R[82],N,[[]]],[5,"__rsr",E,R[83],N,[[["r"]],["u32"]]],[5,"__rsr64",E,R[84],N,[[["r"]],["u64"]]],[5,"__rsrp",E,R[85],N,[[["r"]]]],[5,"__wsr",E,R[86],N,[[["u32"],["r"]]]],[5,"__wsr64",E,R[87],N,[[["u64"],["r"]]]],[5,"__wsrp",E,R[88],N,[[["r"]]]],[11,R[89],E,E,18,[[[U]],[R[92]]]],[11,"from",E,E,18,[[[T]],[T]]],[11,"into",E,E,18,[[],[U]]],[11,R[90],E,E,18,[[],[R[92]]]],[11,R[94],E,E,18,[[["self"]],[T]]],[11,R[91],E,E,18,[[["self"]],[T]]],[11,R[93],E,E,18,[[["self"]],[R[95]]]],[11,R[89],E,E,19,[[[U]],[R[92]]]],[11,"from",E,E,19,[[[T]],[T]]],[11,"into",E,E,19,[[],[U]]],[11,R[90],E,E,19,[[],[R[92]]]],[11,R[94],E,E,19,[[["self"]],[T]]],[11,R[91],E,E,19,[[["self"]],[T]]],[11,R[93],E,E,19,[[["self"]],[R[95]]]],[11,R[89],E,E,20,[[[U]],[R[92]]]],[11,"from",E,E,20,[[[T]],[T]]],[11,"into",E,E,20,[[],[U]]],[11,R[90],E,E,20,[[],[R[92]]]],[11,R[94],E,E,20,[[["self"]],[T]]],[11,R[91],E,E,20,[[["self"]],[T]]],[11,R[93],E,E,20,[[["self"]],[R[95]]]],[11,R[89],E,E,21,[[[U]],[R[92]]]],[11,"from",E,E,21,[[[T]],[T]]],[11,"into",E,E,21,[[],[U]]],[11,R[90],E,E,21,[[],[R[92]]]],[11,R[94],E,E,21,[[["self"]],[T]]],[11,R[91],E,E,21,[[["self"]],[T]]],[11,R[93],E,E,21,[[["self"]],[R[95]]]],[11,R[89],E,E,22,[[[U]],[R[92]]]],[11,"from",E,E,22,[[[T]],[T]]],[11,"into",E,E,22,[[],[U]]],[11,R[90],E,E,22,[[],[R[92]]]],[11,R[94],E,E,22,[[["self"]],[T]]],[11,R[91],E,E,22,[[["self"]],[T]]],[11,R[93],E,E,22,[[["self"]],[R[95]]]],[11,R[89],E,E,23,[[[U]],[R[92]]]],[11,"from",E,E,23,[[[T]],[T]]],[11,"into",E,E,23,[[],[U]]],[11,R[90],E,E,23,[[],[R[92]]]],[11,R[94],E,E,23,[[["self"]],[T]]],[11,R[91],E,E,23,[[["self"]],[T]]],[11,R[93],E,E,23,[[["self"]],[R[95]]]],[11,R[89],E,E,24,[[[U]],[R[92]]]],[11,"from",E,E,24,[[[T]],[T]]],[11,"into",E,E,24,[[],[U]]],[11,R[90],E,E,24,[[],[R[92]]]],[11,R[94],E,E,24,[[["self"]],[T]]],[11,R[91],E,E,24,[[["self"]],[T]]],[11,R[93],E,E,24,[[["self"]],[R[95]]]],[11,R[89],E,E,25,[[[U]],[R[92]]]],[11,"from",E,E,25,[[[T]],[T]]],[11,"into",E,E,25,[[],[U]]],[11,R[90],E,E,25,[[],[R[92]]]],[11,R[94],E,E,25,[[["self"]],[T]]],[11,R[91],E,E,25,[[["self"]],[T]]],[11,R[93],E,E,25,[[["self"]],[R[95]]]],[11,R[89],E,E,26,[[[U]],[R[92]]]],[11,"from",E,E,26,[[[T]],[T]]],[11,"into",E,E,26,[[],[U]]],[11,R[90],E,E,26,[[],[R[92]]]],[11,R[94],E,E,26,[[["self"]],[T]]],[11,R[91],E,E,26,[[["self"]],[T]]],[11,R[93],E,E,26,[[["self"]],[R[95]]]],[11,R[89],E,E,27,[[[U]],[R[92]]]],[11,"from",E,E,27,[[[T]],[T]]],[11,"into",E,E,27,[[],[U]]],[11,R[90],E,E,27,[[],[R[92]]]],[11,R[94],E,E,27,[[["self"]],[T]]],[11,R[91],E,E,27,[[["self"]],[T]]],[11,R[93],E,E,27,[[["self"]],[R[95]]]],[11,R[89],E,E,28,[[[U]],[R[92]]]],[11,"from",E,E,28,[[[T]],[T]]],[11,"into",E,E,28,[[],[U]]],[11,R[90],E,E,28,[[],[R[92]]]],[11,R[94],E,E,28,[[["self"]],[T]]],[11,R[91],E,E,28,[[["self"]],[T]]],[11,R[93],E,E,28,[[["self"]],[R[95]]]],[11,R[89],E,E,29,[[[U]],[R[92]]]],[11,"from",E,E,29,[[[T]],[T]]],[11,"into",E,E,29,[[],[U]]],[11,R[90],E,E,29,[[],[R[92]]]],[11,R[94],E,E,29,[[["self"]],[T]]],[11,R[91],E,E,29,[[["self"]],[T]]],[11,R[93],E,E,29,[[["self"]],[R[95]]]],[11,R[89],E,E,30,[[[U]],[R[92]]]],[11,"from",E,E,30,[[[T]],[T]]],[11,"into",E,E,30,[[],[U]]],[11,R[90],E,E,30,[[],[R[92]]]],[11,R[94],E,E,30,[[["self"]],[T]]],[11,R[91],E,E,30,[[["self"]],[T]]],[11,R[93],E,E,30,[[["self"]],[R[95]]]],[11,R[89],E,E,31,[[[U]],[R[92]]]],[11,"from",E,E,31,[[[T]],[T]]],[11,"into",E,E,31,[[],[U]]],[11,R[90],E,E,31,[[],[R[92]]]],[11,R[94],E,E,31,[[["self"]],[T]]],[11,R[91],E,E,31,[[["self"]],[T]]],[11,R[93],E,E,31,[[["self"]],[R[95]]]],[11,R[89],E,E,32,[[[U]],[R[92]]]],[11,"from",E,E,32,[[[T]],[T]]],[11,"into",E,E,32,[[],[U]]],[11,R[90],E,E,32,[[],[R[92]]]],[11,R[94],E,E,32,[[["self"]],[T]]],[11,R[91],E,E,32,[[["self"]],[T]]],[11,R[93],E,E,32,[[["self"]],[R[95]]]],[11,R[89],E,E,33,[[[U]],[R[92]]]],[11,"from",E,E,33,[[[T]],[T]]],[11,"into",E,E,33,[[],[U]]],[11,R[90],E,E,33,[[],[R[92]]]],[11,R[94],E,E,33,[[["self"]],[T]]],[11,R[91],E,E,33,[[["self"]],[T]]],[11,R[93],E,E,33,[[["self"]],[R[95]]]],[11,R[89],E,E,0,[[[U]],[R[92]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[90],E,E,0,[[],[R[92]]]],[11,R[94],E,E,0,[[["self"]],[T]]],[11,R[91],E,E,0,[[["self"]],[T]]],[11,R[93],E,E,0,[[["self"]],[R[95]]]],[11,R[89],E,E,1,[[[U]],[R[92]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[90],E,E,1,[[],[R[92]]]],[11,R[94],E,E,1,[[["self"]],[T]]],[11,R[91],E,E,1,[[["self"]],[T]]],[11,R[93],E,E,1,[[["self"]],[R[95]]]],[11,R[89],E,E,2,[[[U]],[R[92]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[90],E,E,2,[[],[R[92]]]],[11,R[94],E,E,2,[[["self"]],[T]]],[11,R[91],E,E,2,[[["self"]],[T]]],[11,R[93],E,E,2,[[["self"]],[R[95]]]],[11,R[89],E,E,3,[[[U]],[R[92]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[90],E,E,3,[[],[R[92]]]],[11,R[94],E,E,3,[[["self"]],[T]]],[11,R[91],E,E,3,[[["self"]],[T]]],[11,R[93],E,E,3,[[["self"]],[R[95]]]],[11,R[89],E,E,4,[[[U]],[R[92]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[90],E,E,4,[[],[R[92]]]],[11,R[94],E,E,4,[[["self"]],[T]]],[11,R[91],E,E,4,[[["self"]],[T]]],[11,R[93],E,E,4,[[["self"]],[R[95]]]],[11,R[89],E,E,5,[[[U]],[R[92]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[90],E,E,5,[[],[R[92]]]],[11,R[94],E,E,5,[[["self"]],[T]]],[11,R[91],E,E,5,[[["self"]],[T]]],[11,R[93],E,E,5,[[["self"]],[R[95]]]],[11,R[89],E,E,6,[[[U]],[R[92]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[90],E,E,6,[[],[R[92]]]],[11,R[94],E,E,6,[[["self"]],[T]]],[11,R[91],E,E,6,[[["self"]],[T]]],[11,R[93],E,E,6,[[["self"]],[R[95]]]],[11,R[89],E,E,7,[[[U]],[R[92]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[90],E,E,7,[[],[R[92]]]],[11,R[94],E,E,7,[[["self"]],[T]]],[11,R[91],E,E,7,[[["self"]],[T]]],[11,R[93],E,E,7,[[["self"]],[R[95]]]],[11,R[89],E,E,8,[[[U]],[R[92]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[90],E,E,8,[[],[R[92]]]],[11,R[94],E,E,8,[[["self"]],[T]]],[11,R[91],E,E,8,[[["self"]],[T]]],[11,R[93],E,E,8,[[["self"]],[R[95]]]],[11,R[89],E,E,34,[[[U]],[R[92]]]],[11,"from",E,E,34,[[[T]],[T]]],[11,"into",E,E,34,[[],[U]]],[11,R[90],E,E,34,[[],[R[92]]]],[11,R[94],E,E,34,[[["self"]],[T]]],[11,R[91],E,E,34,[[["self"]],[T]]],[11,R[93],E,E,34,[[["self"]],[R[95]]]],[11,R[89],E,E,35,[[[U]],[R[92]]]],[11,"from",E,E,35,[[[T]],[T]]],[11,"into",E,E,35,[[],[U]]],[11,R[90],E,E,35,[[],[R[92]]]],[11,R[94],E,E,35,[[["self"]],[T]]],[11,R[91],E,E,35,[[["self"]],[T]]],[11,R[93],E,E,35,[[["self"]],[R[95]]]],[11,R[89],E,E,36,[[[U]],[R[92]]]],[11,"from",E,E,36,[[[T]],[T]]],[11,"into",E,E,36,[[],[U]]],[11,R[90],E,E,36,[[],[R[92]]]],[11,R[94],E,E,36,[[["self"]],[T]]],[11,R[91],E,E,36,[[["self"]],[T]]],[11,R[93],E,E,36,[[["self"]],[R[95]]]],[11,R[89],E,E,37,[[[U]],[R[92]]]],[11,"from",E,E,37,[[[T]],[T]]],[11,"into",E,E,37,[[],[U]]],[11,R[90],E,E,37,[[],[R[92]]]],[11,R[94],E,E,37,[[["self"]],[T]]],[11,R[91],E,E,37,[[["self"]],[T]]],[11,R[93],E,E,37,[[["self"]],[R[95]]]],[11,R[89],E,E,38,[[[U]],[R[92]]]],[11,"from",E,E,38,[[[T]],[T]]],[11,"into",E,E,38,[[],[U]]],[11,R[90],E,E,38,[[],[R[92]]]],[11,R[94],E,E,38,[[["self"]],[T]]],[11,R[91],E,E,38,[[["self"]],[T]]],[11,R[93],E,E,38,[[["self"]],[R[95]]]],[11,R[89],E,E,39,[[[U]],[R[92]]]],[11,"from",E,E,39,[[[T]],[T]]],[11,"into",E,E,39,[[],[U]]],[11,R[90],E,E,39,[[],[R[92]]]],[11,R[94],E,E,39,[[["self"]],[T]]],[11,R[91],E,E,39,[[["self"]],[T]]],[11,R[93],E,E,39,[[["self"]],[R[95]]]],[11,R[89],E,E,40,[[[U]],[R[92]]]],[11,"from",E,E,40,[[[T]],[T]]],[11,"into",E,E,40,[[],[U]]],[11,R[90],E,E,40,[[],[R[92]]]],[11,R[94],E,E,40,[[["self"]],[T]]],[11,R[91],E,E,40,[[["self"]],[T]]],[11,R[93],E,E,40,[[["self"]],[R[95]]]],[11,R[89],E,E,41,[[[U]],[R[92]]]],[11,"from",E,E,41,[[[T]],[T]]],[11,"into",E,E,41,[[],[U]]],[11,R[90],E,E,41,[[],[R[92]]]],[11,R[94],E,E,41,[[["self"]],[T]]],[11,R[91],E,E,41,[[["self"]],[T]]],[11,R[93],E,E,41,[[["self"]],[R[95]]]],[11,R[89],E,E,42,[[[U]],[R[92]]]],[11,"from",E,E,42,[[[T]],[T]]],[11,"into",E,E,42,[[],[U]]],[11,R[90],E,E,42,[[],[R[92]]]],[11,R[94],E,E,42,[[["self"]],[T]]],[11,R[91],E,E,42,[[["self"]],[T]]],[11,R[93],E,E,42,[[["self"]],[R[95]]]],[11,R[89],E,E,43,[[[U]],[R[92]]]],[11,"from",E,E,43,[[[T]],[T]]],[11,"into",E,E,43,[[],[U]]],[11,R[90],E,E,43,[[],[R[92]]]],[11,R[94],E,E,43,[[["self"]],[T]]],[11,R[91],E,E,43,[[["self"]],[T]]],[11,R[93],E,E,43,[[["self"]],[R[95]]]],[11,R[89],E,E,44,[[[U]],[R[92]]]],[11,"from",E,E,44,[[[T]],[T]]],[11,"into",E,E,44,[[],[U]]],[11,R[90],E,E,44,[[],[R[92]]]],[11,R[94],E,E,44,[[["self"]],[T]]],[11,R[91],E,E,44,[[["self"]],[T]]],[11,R[93],E,E,44,[[["self"]],[R[95]]]],[11,R[89],E,E,45,[[[U]],[R[92]]]],[11,"from",E,E,45,[[[T]],[T]]],[11,"into",E,E,45,[[],[U]]],[11,R[90],E,E,45,[[],[R[92]]]],[11,R[94],E,E,45,[[["self"]],[T]]],[11,R[91],E,E,45,[[["self"]],[T]]],[11,R[93],E,E,45,[[["self"]],[R[95]]]],[11,R[89],E,E,46,[[[U]],[R[92]]]],[11,"from",E,E,46,[[[T]],[T]]],[11,"into",E,E,46,[[],[U]]],[11,R[90],E,E,46,[[],[R[92]]]],[11,R[94],E,E,46,[[["self"]],[T]]],[11,R[91],E,E,46,[[["self"]],[T]]],[11,R[93],E,E,46,[[["self"]],[R[95]]]],[11,R[89],E,E,47,[[[U]],[R[92]]]],[11,"from",E,E,47,[[[T]],[T]]],[11,"into",E,E,47,[[],[U]]],[11,R[90],E,E,47,[[],[R[92]]]],[11,R[94],E,E,47,[[["self"]],[T]]],[11,R[91],E,E,47,[[["self"]],[T]]],[11,R[93],E,E,47,[[["self"]],[R[95]]]],[11,R[89],E,E,48,[[[U]],[R[92]]]],[11,"from",E,E,48,[[[T]],[T]]],[11,"into",E,E,48,[[],[U]]],[11,R[90],E,E,48,[[],[R[92]]]],[11,R[94],E,E,48,[[["self"]],[T]]],[11,R[91],E,E,48,[[["self"]],[T]]],[11,R[93],E,E,48,[[["self"]],[R[95]]]],[11,R[89],E,E,49,[[[U]],[R[92]]]],[11,"from",E,E,49,[[[T]],[T]]],[11,"into",E,E,49,[[],[U]]],[11,R[90],E,E,49,[[],[R[92]]]],[11,R[94],E,E,49,[[["self"]],[T]]],[11,R[91],E,E,49,[[["self"]],[T]]],[11,R[93],E,E,49,[[["self"]],[R[95]]]],[11,R[89],E,E,50,[[[U]],[R[92]]]],[11,"from",E,E,50,[[[T]],[T]]],[11,"into",E,E,50,[[],[U]]],[11,R[90],E,E,50,[[],[R[92]]]],[11,R[94],E,E,50,[[["self"]],[T]]],[11,R[91],E,E,50,[[["self"]],[T]]],[11,R[93],E,E,50,[[["self"]],[R[95]]]],[11,R[89],E,E,51,[[[U]],[R[92]]]],[11,"from",E,E,51,[[[T]],[T]]],[11,"into",E,E,51,[[],[U]]],[11,R[90],E,E,51,[[],[R[92]]]],[11,R[94],E,E,51,[[["self"]],[T]]],[11,R[91],E,E,51,[[["self"]],[T]]],[11,R[93],E,E,51,[[["self"]],[R[95]]]],[11,R[89],E,E,52,[[[U]],[R[92]]]],[11,"from",E,E,52,[[[T]],[T]]],[11,"into",E,E,52,[[],[U]]],[11,R[90],E,E,52,[[],[R[92]]]],[11,R[94],E,E,52,[[["self"]],[T]]],[11,R[91],E,E,52,[[["self"]],[T]]],[11,R[93],E,E,52,[[["self"]],[R[95]]]],[11,R[89],E,E,53,[[[U]],[R[92]]]],[11,"from",E,E,53,[[[T]],[T]]],[11,"into",E,E,53,[[],[U]]],[11,R[90],E,E,53,[[],[R[92]]]],[11,R[94],E,E,53,[[["self"]],[T]]],[11,R[91],E,E,53,[[["self"]],[T]]],[11,R[93],E,E,53,[[["self"]],[R[95]]]],[11,R[89],E,E,54,[[[U]],[R[92]]]],[11,"from",E,E,54,[[[T]],[T]]],[11,"into",E,E,54,[[],[U]]],[11,R[90],E,E,54,[[],[R[92]]]],[11,R[94],E,E,54,[[["self"]],[T]]],[11,R[91],E,E,54,[[["self"]],[T]]],[11,R[93],E,E,54,[[["self"]],[R[95]]]],[11,R[89],E,E,55,[[[U]],[R[92]]]],[11,"from",E,E,55,[[[T]],[T]]],[11,"into",E,E,55,[[],[U]]],[11,R[90],E,E,55,[[],[R[92]]]],[11,R[94],E,E,55,[[["self"]],[T]]],[11,R[91],E,E,55,[[["self"]],[T]]],[11,R[93],E,E,55,[[["self"]],[R[95]]]],[11,R[89],E,E,9,[[[U]],[R[92]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[90],E,E,9,[[],[R[92]]]],[11,R[94],E,E,9,[[["self"]],[T]]],[11,R[91],E,E,9,[[["self"]],[T]]],[11,R[93],E,E,9,[[["self"]],[R[95]]]],[11,R[89],E,E,10,[[[U]],[R[92]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[90],E,E,10,[[],[R[92]]]],[11,R[94],E,E,10,[[["self"]],[T]]],[11,R[91],E,E,10,[[["self"]],[T]]],[11,R[93],E,E,10,[[["self"]],[R[95]]]],[11,R[89],E,E,11,[[[U]],[R[92]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[90],E,E,11,[[],[R[92]]]],[11,R[94],E,E,11,[[["self"]],[T]]],[11,R[91],E,E,11,[[["self"]],[T]]],[11,R[93],E,E,11,[[["self"]],[R[95]]]],[11,R[89],E,E,12,[[[U]],[R[92]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[90],E,E,12,[[],[R[92]]]],[11,R[94],E,E,12,[[["self"]],[T]]],[11,R[91],E,E,12,[[["self"]],[T]]],[11,R[93],E,E,12,[[["self"]],[R[95]]]],[11,R[89],E,E,13,[[[U]],[R[92]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[90],E,E,13,[[],[R[92]]]],[11,R[94],E,E,13,[[["self"]],[T]]],[11,R[91],E,E,13,[[["self"]],[T]]],[11,R[93],E,E,13,[[["self"]],[R[95]]]],[11,R[89],E,E,14,[[[U]],[R[92]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[],[U]]],[11,R[90],E,E,14,[[],[R[92]]]],[11,R[94],E,E,14,[[["self"]],[T]]],[11,R[91],E,E,14,[[["self"]],[T]]],[11,R[93],E,E,14,[[["self"]],[R[95]]]],[11,R[89],E,E,15,[[[U]],[R[92]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[90],E,E,15,[[],[R[92]]]],[11,R[94],E,E,15,[[["self"]],[T]]],[11,R[91],E,E,15,[[["self"]],[T]]],[11,R[93],E,E,15,[[["self"]],[R[95]]]],[11,R[89],E,E,16,[[[U]],[R[92]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[90],E,E,16,[[],[R[92]]]],[11,R[94],E,E,16,[[["self"]],[T]]],[11,R[91],E,E,16,[[["self"]],[T]]],[11,R[93],E,E,16,[[["self"]],[R[95]]]],[11,R[89],E,E,17,[[[U]],[R[92]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[],[U]]],[11,R[90],E,E,17,[[],[R[92]]]],[11,R[94],E,E,17,[[["self"]],[T]]],[11,R[91],E,E,17,[[["self"]],[T]]],[11,R[93],E,E,17,[[["self"]],[R[95]]]],[11,"fmt",E,E,30,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,31,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,32,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,33,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,34,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,35,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,36,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,37,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,38,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,39,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,40,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,41,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,42,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,43,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,44,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,45,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,46,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,47,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,48,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,49,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,50,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,51,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,52,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,53,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,54,[[[R[96]],["self"]],[R[92]]]],[11,"fmt",E,E,55,[[[R[96]],["self"]],[R[92]]]],[11,"clone",E,E,30,[[["self"]],[R[14]]]],[11,"clone",E,E,31,[[["self"]],[R[16]]]],[11,"clone",E,E,32,[[["self"]],[R[40]]]],[11,"clone",E,E,33,[[["self"]],[R[41]]]],[11,"clone",E,E,0,[[["self"]],[R[57]]]],[11,"clone",E,E,1,[[["self"]],[R[60]]]],[11,"clone",E,E,2,[[["self"]],[R[63]]]],[11,"clone",E,E,3,[[["self"]],[R[58]]]],[11,"clone",E,E,4,[[["self"]],[R[61]]]],[11,"clone",E,E,5,[[["self"]],[R[64]]]],[11,"clone",E,E,6,[[["self"]],[R[59]]]],[11,"clone",E,E,7,[[["self"]],[R[62]]]],[11,"clone",E,E,8,[[["self"]],[R[65]]]],[11,"clone",E,E,34,[[["self"]],[R[17]]]],[11,"clone",E,E,35,[[["self"]],[R[24]]]],[11,"clone",E,E,36,[[["self"]],[R[42]]]],[11,"clone",E,E,37,[[["self"]],[R[20]]]],[11,"clone",E,E,38,[[["self"]],[R[26]]]],[11,"clone",E,E,39,[[["self"]],[R[44]]]],[11,"clone",E,E,40,[[["self"]],[R[22]]]],[11,"clone",E,E,41,[[["self"]],[R[28]]]],[11,"clone",E,E,42,[[["self"]],[R[30]]]],[11,"clone",E,E,43,[[["self"]],[R[36]]]],[11,"clone",E,E,44,[[["self"]],[R[38]]]],[11,"clone",E,E,45,[[["self"]],[R[19]]]],[11,"clone",E,E,46,[[["self"]],[R[25]]]],[11,"clone",E,E,47,[[["self"]],[R[43]]]],[11,"clone",E,E,48,[[["self"]],[R[21]]]],[11,"clone",E,E,49,[[["self"]],[R[27]]]],[11,"clone",E,E,50,[[["self"]],[R[45]]]],[11,"clone",E,E,51,[[["self"]],[R[23]]]],[11,"clone",E,E,52,[[["self"]],[R[29]]]],[11,"clone",E,E,53,[[["self"]],[R[31]]]],[11,"clone",E,E,54,[[["self"]],[R[37]]]],[11,"clone",E,E,55,[[["self"]],[R[39]]]],[11,"clone",E,E,9,[[["self"]],[R[47]]]],[11,"clone",E,E,10,[[["self"]],[R[50]]]],[11,"clone",E,E,11,[[["self"]],[R[53]]]],[11,"clone",E,E,12,[[["self"]],[R[48]]]],[11,"clone",E,E,13,[[["self"]],[R[51]]]],[11,"clone",E,E,14,[[["self"]],[R[54]]]],[11,"clone",E,E,15,[[["self"]],[R[49]]]],[11,"clone",E,E,16,[[["self"]],[R[52]]]],[11,"clone",E,E,17,[[["self"]],[R[55]]]]],"p":[[3,R[57]],[3,R[60]],[3,R[63]],[3,R[58]],[3,R[61]],[3,R[64]],[3,R[59]],[3,R[62]],[3,R[65]],[3,R[47]],[3,R[50]],[3,R[53]],[3,R[48]],[3,R[51]],[3,R[54]],[3,R[49]],[3,R[52]],[3,R[55]],[3,"SY"],[3,"ST"],[3,"ISH"],[3,"ISHST"],[3,"NSH"],[3,"NSHST"],[3,"OSH"],[3,"OSHST"],[3,"LD"],[3,"ISHLD"],[3,"NSHLD"],[3,"OSHLD"],[3,R[14]],[3,R[16]],[3,R[40]],[3,R[41]],[3,R[17]],[3,R[24]],[3,R[42]],[3,R[20]],[3,R[26]],[3,R[44]],[3,R[22]],[3,R[28]],[3,R[30]],[3,R[36]],[3,R[38]],[3,R[19]],[3,R[25]],[3,R[43]],[3,R[21]],[3,R[27]],[3,R[45]],[3,R[23]],[3,R[29]],[3,R[31]],[3,R[37]],[3,R[39]]]};
searchIndex["std_detect"]={"doc":"Run-time feature detection for the Rust standard library.","i":[[14,"is_x86_feature_detected","std_detect","Prevents compilation if `is_x86_feature_detected` is used…",N,N],[14,"is_arm_feature_detected",E,"Prevents compilation if `is_arm_feature_detected` is used…",N,N],[14,"is_powerpc_feature_detected",E,"Prevents compilation if `is_powerpc_feature_detected` is…",N,N],[14,"is_powerpc64_feature_detected",E,"Prevents compilation if `is_powerpc64_feature_detected` is…",N,N],[14,"is_mips_feature_detected",E,"Prevents compilation if `is_mips_feature_detected` is used…",N,N],[14,"is_mips64_feature_detected",E,"Prevents compilation if `is_mips64_feature_detected` is…",N,N],[14,"is_aarch64_feature_detected",E,"Checks if `aarch64` feature is enabled.",N,N]],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);