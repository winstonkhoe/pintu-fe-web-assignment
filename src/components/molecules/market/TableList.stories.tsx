import type { Meta, StoryObj } from '@storybook/react';

import MarketTableList from './TableList';

const meta = {
  component: MarketTableList,
  tags: ['autodocs']
} satisfies Meta<typeof MarketTableList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    supportedCurrencies: {
      code: 'success',
      message: '',
      payload: [
        {
          currency_id: 13,
          currencyGroup: 'IDR',
          color: '#B13932',
          currencySymbol: 'Rp',
          name: 'Rupiah Token',
          logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
          decimal_point: 0,
          listingDate: '2020-09-15T09:43:42.000Z',
          wallets: [
            {
              currency_id: 11,
              currencyGroup: 'IDR',
              tokenSymbol: 'IDRT',
              decimal_point: 2,
              tokenType: 'ERC-20',
              blockchain: 'Ethereum',
              explorer: 'https://etherscan.io/tx/',
              listingDate: '2020-09-15T09:43:43.000Z',
              blockchainName: 'Ethereum',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg'
            },
            {
              currency_id: 48,
              currencyGroup: 'IDR',
              tokenSymbol: 'IDRTBSC',
              decimal_point: 2,
              tokenType: 'BEP-20',
              blockchain: 'Binance Smartchain',
              explorer: 'https://bscscan.com/tx/',
              listingDate: '2022-04-11T09:02:03.000Z',
              blockchainName: 'BNB Smart Chain',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-20+(BSC).svg'
            },
            {
              currency_id: 199,
              currencyGroup: 'IDR',
              tokenSymbol: 'IDRTPOLYGON',
              decimal_point: 6,
              tokenType: 'Polygon',
              blockchain: 'Polygon',
              explorer: 'https://polygonscan.com/tx/',
              listingDate: '2023-01-24T00:00:00.000Z',
              blockchainName: 'Polygon',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/MATIC.svg'
            }
          ],

          is_limit_order_enabled: false,
          is_upcoming: false
        },
        {
          currency_id: 1,
          currencyGroup: 'BTC',
          color: '#F78B1A',
          currencySymbol: 'BTC',
          name: 'Bitcoin',
          logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
          decimal_point: 8,
          listingDate: '2020-09-15T09:43:45.000Z',

          wallets: [
            {
              currency_id: 1,
              currencyGroup: 'BTC',
              tokenSymbol: 'BTC',
              decimal_point: 8,
              tokenType: 'Bitcoin',
              blockchain: 'Bitcoin',
              explorer: 'https://explorer.bitcoin.com/btc/tx/',
              listingDate: '2020-09-15T09:43:45.000Z',
              blockchainName: 'Bitcoin',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg'
            }
          ],

          is_limit_order_enabled: true,
          is_upcoming: false
        },
        {
          currency_id: 2,
          currencyGroup: 'ETH',
          color: '#9011FE',
          currencySymbol: 'ETH',
          name: 'Ethereum',
          logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg',
          decimal_point: 18,
          listingDate: '2020-09-15T09:43:46.000Z',

          wallets: [
            {
              currency_id: 2,
              currencyGroup: 'ETH',
              tokenSymbol: 'ETH',
              decimal_point: 18,
              tokenType: 'ERC-20',
              blockchain: 'Ethereum',
              explorer: 'https://etherscan.io/tx/',
              listingDate: '2020-09-15T09:43:46.000Z',
              blockchainName: 'Ethereum',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg'
            },
            {
              currency_id: 139,
              currencyGroup: 'ETH',
              tokenSymbol: 'ETHOP',
              decimal_point: 18,
              tokenType: 'Optimism',
              blockchain: 'Optimism',
              explorer: 'https://optimistic.etherscan.io/tx/',
              listingDate: '2022-10-27T07:00:21.000Z',
              blockchainName: 'Optimism',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Optimism.svg'
            },
            {
              currency_id: 140,
              currencyGroup: 'ETH',
              tokenSymbol: 'ETHARBITRUM',
              decimal_point: 18,
              tokenType: 'Arbitrum',
              blockchain: 'Arbitrum',
              explorer: 'https://arbiscan.io/tx/',
              listingDate: '2022-10-27T07:00:22.000Z',
              blockchainName: 'Arbitrum',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Arbitrum.svg'
            },
            {
              currency_id: 384,
              currencyGroup: 'ETH',
              tokenSymbol: 'ETHBASE',
              decimal_point: 18,
              tokenType: 'Base',
              blockchain: 'Base',
              explorer: 'https://basescan.org/tx/',
              listingDate: '2024-04-04T17:00:00.000Z',
              blockchainName: 'Base',
              logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BASE.svg'
            }
          ],

          is_limit_order_enabled: true,
          is_upcoming: false
        },
        {
          currency_id: 4,
          currencyGroup: 'USDT',
          color: '#15A57C',
          currencySymbol: 'USDT',
          name: 'Tether',
          logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_USDT.svg',
          decimal_point: 6,
          listingDate: '2020-09-15T09:43:47.000Z',

          wallets: [
            {
              currency_id: 4,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDT',
              decimal_point: 6,
              tokenType: 'ERC-20',
              blockchain: 'Ethereum',
              explorer: 'https://etherscan.io/tx/',
              listingDate: '2020-09-15T09:43:47.000Z',
              blockchainName: 'Ethereum',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg'
            },
            {
              currency_id: 84,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTSOLANA',
              decimal_point: 6,
              tokenType: 'Solana',
              blockchain: 'Solana',
              explorer: 'https://explorer.solana.com/tx/',
              listingDate: '2022-05-20T03:22:58.000Z',
              blockchainName: 'Solana',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/SOL.svg'
            },
            {
              currency_id: 82,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTPOLYGON',
              decimal_point: 6,
              tokenType: 'Polygon',
              blockchain: 'Polygon',
              explorer: 'https://polygonscan.com/tx/',
              listingDate: '2022-06-02T07:00:01.000Z',
              blockchainName: 'Polygon',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/MATIC.svg'
            },
            {
              currency_id: 86,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTBSC',
              decimal_point: 18,
              tokenType: 'BEP-20',
              blockchain: 'Binance Smartchain',
              explorer: 'https://bscscan.com/tx/',
              listingDate: '2022-06-02T07:00:03.000Z',
              blockchainName: 'BNB Smart Chain',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/BEP-20+(BSC).svg'
            },
            {
              currency_id: 88,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTAVAX',
              decimal_point: 6,
              tokenType: 'AVAX - C Chain',
              blockchain: 'Avalanche C-Chain',
              explorer: 'https://snowtrace.io/tx/',
              listingDate: '2022-06-02T07:00:05.000Z',
              blockchainName: 'AVAX - C Chain',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/AVAX.svg'
            },
            {
              currency_id: 207,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTTRON',
              decimal_point: 6,
              tokenType: 'TRON',
              blockchain: 'TRON',
              explorer: 'https://tronscan.org/#/transaction/',
              listingDate: '2023-03-27T07:00:00.000Z',
              blockchainName: 'Tron',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/TRC-20.svg'
            },
            {
              currency_id: 219,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTOP',
              decimal_point: 6,
              tokenType: 'Optimism',
              blockchain: 'Optimism',
              explorer: 'https://optimistic.etherscan.io/tx/',
              listingDate: '2023-11-14T17:00:00.000Z',
              blockchainName: 'Optimism',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Optimism.svg'
            },
            {
              currency_id: 218,
              currencyGroup: 'USDT',
              tokenSymbol: 'USDTARBITRUM',
              decimal_point: 6,
              tokenType: 'Arbitrum',
              blockchain: 'Arbitrum',
              explorer: 'https://arbiscan.io/tx/',
              listingDate: '2023-11-14T17:00:00.000Z',
              blockchainName: 'Arbitrum',
              logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Arbitrum.svg'
            }
          ],

          is_limit_order_enabled: true,
          is_upcoming: false
        }
      ]
    },
    priceChanges: {
      code: 'success',
      message: '',
      payload: [
        {
          pair: 'usdt/idr',
          latestPrice: '15891',
          day: '-0.53',
          week: '-0.44',
          month: '1.93',
          year: '2.00'
        },
        {
          pair: 'eth/idr',
          latestPrice: '52832908',
          day: '8.77',
          week: '7.12',
          month: '28.28',
          year: '64.41'
        },
        {
          pair: 'comp/idr',
          latestPrice: '860901',
          day: '4.01',
          week: '16.70',
          month: '20.52',
          year: '9.67'
        },
        {
          pair: 'btc/idr',
          latestPrice: '1569200425',
          day: '4.28',
          week: '11.08',
          month: '49.34',
          year: '169.35'
        },
        {
          pair: 'zrx/idr',
          latestPrice: '6801',
          day: '4.50',
          week: '24.54',
          month: '23.86',
          year: '8.02'
        }
      ]
    }
  }
};
