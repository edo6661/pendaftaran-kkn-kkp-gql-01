import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./user.resolver";
import { bauResolver } from "./bau.resolver";
import { adminResolver } from "./admin.resolver";
import { mahasiswaResolver } from "./mahasiswa.resolver";
import { programStudiResolver } from "./programStudi.resolver";
import { fakultasResolver } from "./fakultas.resolver";
import { konsentrasiResolver } from "./konsentrasi.resolver";
import { dosenResolver } from "./dosen.resolver";
import { proyekResolver } from "./proyek.resolver";
import { laporanResolver } from "./laporan.resolver";
import { persyaratanResolver } from "./persyaratan.resolver";
import { pendaftaranResolver } from "./pendaftaran.resolver";
import { biayaOperasionalResolver } from "./biayaOperasional.resolver";
import { angkatanResolver } from "./angkatan.resolver";
import { kelompokResolver } from "./kelompok.resolver";

export const mergedResolvers = mergeResolvers([
  userResolver,
  bauResolver,
  adminResolver,
  mahasiswaResolver,
  programStudiResolver,
  fakultasResolver,
  konsentrasiResolver,
  dosenResolver,
  proyekResolver,
  laporanResolver,
  persyaratanResolver,
  pendaftaranResolver,
  biayaOperasionalResolver,
  angkatanResolver,
  kelompokResolver,
]);
