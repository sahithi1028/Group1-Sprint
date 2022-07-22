package com.Group5.Sprint1.Repositories;


import com.Group5.Sprint1.Models.PointsModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PointsRepository extends JpaRepository<PointsModel,Integer> {
    List<PointsModel> findByTournamentId(int tournamentId);
}
