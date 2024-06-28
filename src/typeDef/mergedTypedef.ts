import { mergeTypeDefs } from "@graphql-tools/merge";
import { userTypedef } from "./user.typedef";
import { bauTypedef } from "./bau.typedef";
import { adminTypedef } from "./admin.typedef";
import { mahasiswaTypedef } from "./mahasiswa.typedef";
import { programStudiTypedef } from "./programStudi.typedef";
import { fakultasTypedef } from "./fakultas.typedef";
import { konsentrasiTypedef } from "./konsentrasi.typedef";
import { dosenTypedef } from "./dosen.typedef";
import { proyekTypedef } from "./proyek.typedef";
import { laporanTypedef } from "./laporan.typedef";
import { persyaratanTypedef } from "./persyaratan.typedef";
import { pendaftaranTypedef } from "./pendaftaran.typedef";
import { biayaOperasionalTypedef } from "./biayaOperasional.typedef";

export const mergedTypedef = mergeTypeDefs([
  userTypedef,
  bauTypedef,
  adminTypedef,
  mahasiswaTypedef,
  programStudiTypedef,
  fakultasTypedef,
  konsentrasiTypedef,
  dosenTypedef,
  proyekTypedef,
  laporanTypedef,
  persyaratanTypedef,
  pendaftaranTypedef,
  biayaOperasionalTypedef,
]);
