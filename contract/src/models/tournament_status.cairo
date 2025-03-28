use core::traits::Into;
use core::result::Result::{Ok, Err};
use core::result::Result;
use starknet::core::errors::Error;
use traits::TryInto;
use traits::Drop;
use traits::Serde;

#[derive(Copy, Drop, Serde, PartialEq, Eq)]
#[repr(u8)]
pub enum TournamentStatus {
    Upcoming = 1,
    Active = 2,
    Finished = 3,
    Cancelled = 4,
}

pub const TOURNAMENT_STATUS_UPCOMING: felt252 = 'Upcoming';
pub const TOURNAMENT_STATUS_ACTIVE: felt252 = 'Active';
pub const TOURNAMENT_STATUS_FINISHED: felt252 = 'Finished';
pub const TOURNAMENT_STATUS_CANCELLED: felt252 = 'Cancelled';

pub fn tournament_status_all() -> Array<TournamentStatus> {
    let mut list: Array<TournamentStatus> = ArrayTrait::new();
    list.append(TournamentStatus::Upcoming);
    list.append(TournamentStatus::Active);
    list.append(TournamentStatus::Finished);
    list.append(TournamentStatus::Cancelled);
    list
}

pub fn tournament_status_labels() -> Array<felt252> {
    let mut labels: Array<felt252> = ArrayTrait::new();
    labels.append(TOURNAMENT_STATUS_UPCOMING);
    labels.append(TOURNAMENT_STATUS_ACTIVE);
    labels.append(TOURNAMENT_STATUS_FINISHED);
    labels.append(TOURNAMENT_STATUS_CANCELLED);
    labels
}

pub impl IntoTournamentStatusFelt252 of Into<TournamentStatus, felt252> {
    #[inline(always)]
    fn into(self: TournamentStatus) -> felt252 {
        match self {
            TournamentStatus::Upcoming => TOURNAMENT_STATUS_UPCOMING,
            TournamentStatus::Active => TOURNAMENT_STATUS_ACTIVE,
            TournamentStatus::Finished => TOURNAMENT_STATUS_FINISHED,
            TournamentStatus::Cancelled => TOURNAMENT_STATUS_CANCELLED,
        }
    }
}

pub impl IntoTournamentStatusU8 of Into<TournamentStatus, u8> {
    #[inline(always)]
    fn into(self: TournamentStatus) -> u8 {
        match self {
            TournamentStatus::Upcoming => 1,
            TournamentStatus::Active => 2,
            TournamentStatus::Finished => 3,
            TournamentStatus::Cancelled => 4,
        }
    }
}

pub impl IntoU8TournamentStatus of Into<u8, TournamentStatus> {
    #[inline(always)]
    fn into(self: u8) -> TournamentStatus {
        match self {
            1 => TournamentStatus::Upcoming,
            2 => TournamentStatus::Active,
            3 => TournamentStatus::Finished,
            4 => TournamentStatus::Cancelled,
            _ => TournamentStatus::Cancelled,
        }
    }
}

pub fn try_u8_to_tournament_status(value: u8) -> Result<TournamentStatus, Error> {
    match value {
        1 => Ok(TournamentStatus::Upcoming),
        2 => Ok(TournamentStatus::Active),
        3 => Ok(TournamentStatus::Finished),
        4 => Ok(TournamentStatus::Cancelled),
        _ => Err(Error::InputParsingFailed),
    }
}

pub fn try_felt252_to_tournament_status(value: felt252) -> Result<TournamentStatus, Error> {
    match value {
        TOURNAMENT_STATUS_UPCOMING => Ok(TournamentStatus::Upcoming),
        TOURNAMENT_STATUS_ACTIVE => Ok(TournamentStatus::Active),
        TOURNAMENT_STATUS_FINISHED => Ok(TournamentStatus::Finished),
        TOURNAMENT_STATUS_CANCELLED => Ok(TournamentStatus::Cancelled),
        _ => Err(Error::InputParsingFailed),
    }
}

pub fn tournament_status_to_pair(status: TournamentStatus) -> (u8, felt252) {
    let num: u8 = status.into();
    let label: felt252 = status.into();
    (num, label)
}

pub fn tournament_status_from_pair(num: u8, label: felt252) -> Result<TournamentStatus, Error> {
    let status_result = try_u8_to_tournament_status(num);
    match status_result {
        Ok(status) => {
            if status.into() == label {
                Ok(status)
            } else {
                Err(Error::InputParsingFailed)
            }
        },
        Err(err) => Err(err),
    }
}

#[test]
fn test_enum_to_felt252() {
    assert(TournamentStatus::Upcoming.into() == TOURNAMENT_STATUS_UPCOMING, 'Failed: Upcoming');
    assert(TournamentStatus::Active.into() == TOURNAMENT_STATUS_ACTIVE, 'Failed: Active');
    assert(TournamentStatus::Finished.into() == TOURNAMENT_STATUS_FINISHED, 'Failed: Finished');
    assert(TournamentStatus::Cancelled.into() == TOURNAMENT_STATUS_CANCELLED, 'Failed: Cancelled');
}

#[test]
fn test_enum_to_u8() {
    assert(TournamentStatus::Upcoming.into() == 1, 'Failed: 1');
    assert(TournamentStatus::Active.into() == 2, 'Failed: 2');
    assert(TournamentStatus::Finished.into() == 3, 'Failed: 3');
    assert(TournamentStatus::Cancelled.into() == 4, 'Failed: 4');
}

#[test]
fn test_u8_to_enum_valid() {
    assert(*try_u8_to_tournament_status(1).unwrap() == TournamentStatus::Upcoming, 'Failed 1');
    assert(*try_u8_to_tournament_status(2).unwrap() == TournamentStatus::Active, 'Failed 2');
    assert(*try_u8_to_tournament_status(3).unwrap() == TournamentStatus::Finished, 'Failed 3');
    assert(*try_u8_to_tournament_status(4).unwrap() == TournamentStatus::Cancelled, 'Failed 4');
}

#[test]
fn test_u8_to_enum_invalid() {
    assert(try_u8_to_tournament_status(0).is_err(), 'Should fail 0');
    assert(try_u8_to_tournament_status(99).is_err(), 'Should fail 99');
}

#[test]
fn test_felt252_to_enum_valid() {
    assert(*try_felt252_to_tournament_status('Upcoming').unwrap() == TournamentStatus::Upcoming, 'Failed: Upcoming');
    assert(*try_felt252_to_tournament_status('Active').unwrap() == TournamentStatus::Active, 'Failed: Active');
    assert(*try_felt252_to_tournament_status('Finished').unwrap() == TournamentStatus::Finished, 'Failed: Finished');
    assert(*try_felt252_to_tournament_status('Cancelled').unwrap() == TournamentStatus::Cancelled, 'Failed: Cancelled');
}

#[test]
fn test_felt252_to_enum_invalid() {
    assert(try_felt252_to_tournament_status('Paused').is_err(), 'Should fail Paused');
    assert(try_felt252_to_tournament_status('InProgress').is_err(), 'Should fail InProgress');
}

#[test]
fn test_roundtrip_pair_conversion() {
    let variants = tournament_status_all();
    let mut i = 0;
    loop {
        if i == variants.len() {
            break;
        }
        let status = variants.get(i);
        let (num, label) = tournament_status_to_pair(status);
        let result = tournament_status_from_pair(num, label);
        assert(result.is_ok(), 'Pair conversion failed');
        assert(*result.unwrap() == status, 'Pair mismatch');
        i += 1;
    }
}

#[test]
fn test_labels_match_enum() {
    let variants = tournament_status_all();
    let labels = tournament_status_labels();
    assert(variants.len() == labels.len(), 'Mismatched lengths');
    let mut i = 0;
    loop {
        if i == variants.len() {
            break;
        }
        let status = variants.get(i);
        let label = labels.get(i);
        assert(status.into() == label, 'Mismatch');
        i += 1;
    }
}
