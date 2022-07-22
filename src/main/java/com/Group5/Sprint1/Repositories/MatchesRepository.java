package com.Group5.Sprint1.Repositories;


import com.Group5.Sprint1.Models.BidsModel;
import com.Group5.Sprint1.Models.MatchesModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface MatchesRepository extends JpaRepository<MatchesModel, Integer> {
    List<MatchesModel> findByTournamentId(int tournamentId);
}
