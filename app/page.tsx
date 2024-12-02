'use client';

import { Icon } from '@iconify-icon/react';
import BigNumber from 'bignumber.js';
import Image from 'next/image';
import { Address } from 'viem';
import { bsc } from 'viem/chains';
import { useBalance } from 'wagmi';

type TProject = {
  name: string;
  display_name: string;
  address: Address;
  pool_address: Address;
  links: {
    website?: string;
    x?: string;
    discord?: string;
    tg?: string;
  };
};

const projects: TProject[] = [
  {
    name: 'liveart',
    display_name: 'LiveArt',
    address: '0xf9521AE0482Fdb271816739a6A6Cb6e3C8699deA',
    pool_address: '0x437BeeF85ED71587d634d8Fdb93db3103691CB4D',
    links: {
      website: 'https://liveart.io/',
      x: 'https://x.com/LiveArtX',
      discord: 'https://discord.com/invite/liveart',
      tg: 'https://t.me/LiveArtX',
    },
  },
  {
    name: 'moongate',
    display_name: 'Moongate',
    address: '0x461Cb9448ea9D720192AFeD38244738E5Da7985A',
    pool_address: '0xb13Efac99553301a234Aab3Ee001B69b116d4DCa',
    links: {
      x: 'https://x.com/Moongate',
      discord: 'https://discord.com/invite/moongateofficial',
    },
  },

  {
    name: 'pandatitan',
    display_name: 'Pandatitan',
    address: '0xb8A6B6670c989acdfCf27D55Cf2Eb7108Ff8F3d0',
    pool_address: '0xF852D23b4c0F4C95811BFC4F0962bE633bd9E698',
    links: {
      website: 'https://www.pandatitan.com/',
      x: 'https://x.com/PandaTitan488',
      tg: 'https://t.me/Panda_Titan488',
    },
  },

  {
    name: 'darenmarket',
    display_name: 'DarenMarket',
    address: '0xCE8545F567A43d676F845286A0D9a38b204656f0',
    pool_address: '0x4a3286a7328DbF21075A604c4dcE443074CdCE81',
    links: {
      website: 'https://daren.market',
      x: 'https://x.com/Daren_Market',
      discord: 'https://discord.com/invite/darenmarket',
      tg: 'https://t.me/Daren_Market',
    },
  },

  {
    name: 'artela',
    display_name: 'Artela',
    address: '0xF250AF74d5D55F6251e743976596b8A923DD1d91',
    pool_address: '0x9721C8039FB930914D2f78DCdFBb9F83422655fb',
    links: {
      website: 'https://artela.network/',
      x: 'https://x.com/artela_network',
      discord: 'https://discord.com/invite/artelanetwork',
    },
  },

  {
    name: '4everland',
    display_name: '4EVERLAND',
    address: '0xD390262AF015b12Ff2Fca6A0Fe6E2D0D2893278d',
    pool_address: '0x3B3A5A3B312d3eBcc34e13aC6693B36E075DF2d9',
    links: {
      website: 'https://www.4everland.org/',
      x: 'https://x.com/4everland_org',
      discord: 'https://discord.com/invite/Cun2VpsdjF',
      tg: 'https://t.me/org_4everland',
    },
  },

  {
    name: 'nubila-network',
    display_name: 'Nubila Network',
    address: '0x59A3d8b77A3A2C626d4769D7FEf741fF5064878B',
    pool_address: '0x92593C21443102ebdd0b2F8523c082556dDE3C06',
    links: {
      website: 'https://nubila.ai/',
      x: 'https://x.com/nubilanetwork',
      discord: 'https://discord.com/invite/nubila',
    },
  },

  {
    name: 'codexfield',
    display_name: 'CodexField',
    address: '0x6238d3bf1D69FF15D0fa804181479c24b23Fe85D',
    pool_address: '0x6647AB15d5c843ba8A27952E3BD04c7221C9f77F',
    links: {
      website: 'https://codexfield.com/',
      x: 'https://x.com/CodexField',
      tg: 'https://t.me/CodexField',
    },
  },

  {
    name: 'gaib',
    display_name: 'GAIB',
    address: '0x833681102391636fa640F040b53FFf948fbAc508',
    pool_address: '0x659dEbA66FC777aa86396636f7b611093B7a0Ab8',
    links: {
      website: 'https://www.gaib.ai/',
      x: 'https://x.com/gaib_ai',
      discord: 'https://discord.com/invite/gaibofficial',
      tg: 'https://t.me/+rekW5KBJC3VmNDJl',
    },
  },

  {
    name: 'sphere-x',
    display_name: 'Sphere X',
    address: '0xD134A126251B0E16854B1419bb89B90A9514703B',
    pool_address: '0xde5AFaD8AD0dAEea283C9805A99bF7223E1E1397',
    links: {
      website: 'https://www.sx.xyz/',
      x: 'https://x.com/SphereX_XYZ',
      discord: 'https://discord.com/invite/spherex',
      tg: 'https://t.me/SphereXExchange',
    },
  },
  {
    name: 'breadnbutter',
    display_name: 'BreadnButter',
    address: '0x1B768D35DA7232661385Cbb7fB871238E31D6307',
    pool_address: '0xA95BF5d827a58cbB056cBB41174B6A2E0220D9Fc',
    links: {
      website: 'https://m.breadnbutter.fun/',
      x: 'https://x.com/breadnbutterxyz',
      discord: 'https://discord.gg/breadnbutterbnb',
    },
  },
];

const fairLaunchAddress = '0xE9F47DF4E25475778c1703659b789296a0e9fBF2';

const ProjectRow = ({ project }: { project: TProject }) => {
  const { data: projectBlanceRes } = useBalance({ chainId: bsc.id, address: project.address });

  const { data: projectPoolBlanceRes } = useBalance({ chainId: bsc.id, address: project.pool_address });

  return (
    <tr>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <a href="https://www.moongate.id" target="_blank" className="link-with-arrow inline-flex items-center gap-2 hover:text-cyan-500">
          <div className="flex-none rounded bg-slate-200">
            <Image src={`/images/index/project-logos/${project.name}.png`} width={30} height={30} alt={project.display_name} className="rounded" />
          </div>

          <div>{project.display_name}</div>
        </a>
      </td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <a
          href={`https://bscscan.com/address/${project.address}`}
          target="_blank"
          title={`${projectBlanceRes?.formatted || 0} BNB`}
          className="link-with-arrow hover:text-cyan-500"
        >
          {!projectBlanceRes?.formatted ? 0 : BigNumber(projectBlanceRes?.formatted || 0).toFixed(7)} BNB
        </a>
      </td>

      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <a
          href={`https://bscscan.com/address/${project.pool_address}`}
          target="_blank"
          title={`${projectPoolBlanceRes?.formatted || 0} BNB`}
          className="link-with-arrow hover:text-cyan-500"
        >
          {!projectPoolBlanceRes?.formatted ? 0 : BigNumber(projectPoolBlanceRes?.formatted || 0).toFixed(7)} BNB
        </a>
      </td>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
        <div className="flex gap-1">
          {project.links.x ? (
            <a href={project.links.x} target="_blank" className="grid size-8 place-items-center rounded-full hover:bg-slate-200 hover:text-black">
              <Icon icon="bi:twitter-x" />
            </a>
          ) : null}

          {project.links.discord ? (
            <a
              href={project.links.discord}
              target="_blank"
              className="grid size-8 place-items-center rounded-full hover:bg-slate-200 hover:text-black"
            >
              <Icon icon="bi:discord" />
            </a>
          ) : null}

          {project.links.tg ? (
            <a href={project.links.tg} target="_blank" className="grid size-8 place-items-center rounded-full hover:bg-slate-200 hover:text-black">
              <Icon icon="ri:telegram-2-line" />
            </a>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default function Home() {
  const { data: fairLaunchBlanceRes } = useBalance({ chainId: bsc.id, address: fairLaunchAddress });

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="pb-4 pt-6">
          <h1 className="text-4xl font-bold">Aspecta Realtime</h1>

          <div className="pt-4 text-slate-500">
            Fair Launch Contract:{' '}
            <a
              href={`https://bscscan.com/address/${fairLaunchAddress}`}
              target="_blank"
              title={`${fairLaunchBlanceRes?.formatted || 0} BNB`}
              className="link-with-arrow hover:text-cyan-500"
            >
              {!fairLaunchBlanceRes?.formatted ? 0 : BigNumber(fairLaunchBlanceRes?.formatted || 0).toFixed(7)} BNB
            </a>
          </div>
        </div>

        <div className="pt-4">
          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b p-4 pb-3 pl-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Project
                </th>
                <th className="border-b p-4 pb-3 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Project Address BNB Balance
                </th>
                <th className="border-b p-4 pb-3 pr-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                  Project Pool BNB Balance
                </th>
                <th className="border-b p-4 pb-3 pr-8 pt-0 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">Links</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {projects.map((project) => (
                <ProjectRow key={project.address} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
